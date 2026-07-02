# Kube-Notes-FrontEnd
<div align="center">
  <img src="images/background-photo.png" alt="Vite+React Logo" width="75%"/>
  <br><br>
</div>

This is a [React](https://react.dev/) Repository that servers as the front-end for a larger [overall project](https://github.com/shahLLL/Kube-Notes-Infra) and is powered by [Vite.](https://vite.dev/)

The project is a distributed note taking service that is meant to be deployed and managed using [Kubernetes.](https://kubernetes.io/)

This repository can be run in two different ways, either by using Docker or Node.

If using Docker:
```
cd src
docker build -t [IMAGE_NAME:IMAGE_TAG] .
docker run -p HOST_PORT:80 [IMAGE_NAME:IMAGE_TAG]
```

If using Node:
```
cd src
npm run build
npm run dev
```

In order to ensure proper functionality remember to integrate with an authentication service and a CRUD based notes service by add a **.env** file to the src directory with the following:
```
VITE_AUTH_API_URL
VITE_NOTES_API_URL
```

Contributions and feedback are more than welcomed. 

When contributing to this project or using it in any way, please do pay attention to: [LICENSE](https://github.com/shahLLL/Kube-Notes-FrontEnd?tab=Apache-2.0-1-ov-file)

☕☕☕**CHEERS AND THANK YOU**☕☕☕
TEST
