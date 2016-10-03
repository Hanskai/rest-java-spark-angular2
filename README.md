rest-java-spark-angular2
========================

With project https://github.com/heroku/java-getting-started as source for application

## Prepare
```
vagrant ssh
sudo nano /etc/environment
JAVA_HOME="/usr/lib/jvm/default-java"
export JAVA_HOME
```

## Run
```
cd ../../vagrant
export $(cat .env)
java -jar target/helloworld.jar

```

## Create Angular2 application on host (not vagrant)

Install NodeJS https://nodejs.org/en/

```
npm install -g angular-cli
ng new frontend

```
