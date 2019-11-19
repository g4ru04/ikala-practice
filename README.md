# steps
1. swagger
1. it's response & CORS restrict
1. express-client
1. docker
1. jenkins?
1. to-cloud (from docker hub? from local cli?)
1. k8s?

# swagger
```
# https://riptutorial.com/zh-TW/swagger/example/19089/introduction---installation---setup--developing-in-node-js-
npm install -g swagger
swagger project create ikala-practice
swagger project start

# http://localhost:10010
#swagger project edit

```
# express-client
```
express ikala-practice/express-client-3002 --view=ejs
```
# docker
```
docker build -t g4ru04/ikala-practice . --no-cache
docker login
docker push g4ru04/ikala-practice
docker run -p 3000:3000 g4ru04/ikala-practice 
```

# jenkins
```
# https://juejin.im/post/5b8ddb70e51d45389153f288
docker pull jenkins
docker run -d -u 0 --privileged  --name jenkins_node1 -p 49003:8080 -v /root/jenkins_node1:/var/jenkins_home jenkins:latest
# http://192.168.99.100:49003/

```
