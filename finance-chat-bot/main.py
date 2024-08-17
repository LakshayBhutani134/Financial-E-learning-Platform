from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import Pinecone
from langchain.llms import HuggingFaceHub
import pinecone
from dotenv import load_dotenv
import os

directory = 'D:/Project/llm/data/'
txt_books = os.listdir(directory)
# print(txt_books)

class ChatBot:
    def __init__(self):
        load_dotenv()

        directory = 'D:/Project/llm/data/'
        txt_books = os.listdir(directory)

        documents = []
        for book in txt_books:
            loader = PyPDFLoader(os.path.join(directory, book))
            documents.extend(loader.load_and_split())

        embeddings = HuggingFaceEmbeddings()

        pinecone.init(
            api_key=os.getenv('PINECONE_API_KEY'),
            environment='gcp-starter'
        )

        index_name = "langchain-demo"

        if index_name not in pinecone.list_indexes():
            pinecone.create_index(name=index_name, metric="cosine", dimension=768)
            docsearch = Pinecone.from_documents(documents, embeddings, index_name=index_name)
        else:
            docsearch = Pinecone.from_existing_index(index_name, embeddings)

        repo_id = "mistralai/Mixtral-8x7B-Instruct-v0.1"
        llm = HuggingFaceHub(
            repo_id=repo_id, model_kwargs={"temperature": 0.8, "top_p": 0.8, "top_k": 50, "max_new_tokens": 512},
            huggingfacehub_api_token=os.getenv('HUGGINGFACE_API_KEY')
        )

        from langchain.schema.runnable import RunnablePassthrough
        from langchain.schema.output_parser import StrOutputParser
        from langchain.prompts import PromptTemplate

        template = """
        You are a financial advisor. These humans will ask you questions about finance. Use the following piece of context to answer the question. 
        If you don't know the answer, just say you don't know. 
        Answer the questions in such detail that even a beginner can understand it.
        Always provide the full response without cutting in-between.

        Context: {context}
        Question: {question}
        Answer: 

        """

        prompt = PromptTemplate(template=template, input_variables=["context", "question"])

        self.rag_chain = (
            {"context": docsearch.as_retriever(), "question": RunnablePassthrough()}
            | prompt
            | llm
            | StrOutputParser()
        )


# bot = ChatBot()
# input_txt = input("Ask me anything: ")
# result = bot.rag_chain.invoke(input_txt)
# print(result)