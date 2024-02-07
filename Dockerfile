FROM python:3.11-slim
COPY ./app.py /deploy/
COPY ./requirements.txt /deploy/
COPY ./titanic.sqlite /deploy/
WORKDIR /deploy/
RUN pip install -r requirements.txt
EXPOSE 443
ENTRYPOINT ["python", "app.py"]
