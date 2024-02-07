FROM python:3.11-slim
COPY ./app.py /deploy/
COPY ./requirements.txt /deploy/
COPY ./titanic.sqlite /deploy/
COPY ./templates /deploy/templates
COPY ./static /deploy/static
WORKDIR /deploy/
RUN pip install -r requirements.txt
EXPOSE 80
ENTRYPOINT ["python", "app.py"]
