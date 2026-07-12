all: help

help:
	@printf "🔵 Use \e[1;34m%-21s\e[0m to \e[1;34m🔧 Install Project Dependencies\e[0m\n" "make install"
	@printf "⚪️ Use \e[1;34m%-21s\e[0m to \e[1;34m🔏 Configure .env file with Service URLs\e[0m\n" "make config"
	@printf "🔵 Use \e[1;34m%-21s\e[0m to \e[1;34m🧱 Build Project\e[0m\n" "make build"
	@printf "⚪️ Use \e[1;34m%-21s\e[0m to \e[1;34m🚀 Run App Locally\e[0m\n" "make start"
	@printf "🔵 Use \e[1;34m%-21s\e[0m to \e[1;34m🐋 Build Local Docker Image\e[0m\n" "make docker-build"
	@printf "⚪️ Use \e[1;34m%-21s\e[0m to \e[1;34m🐳 Run Docker Container\e[0m\n" "make docker-start"
install:
	cd scripts && chmod +x install.sh && ./install.sh
config:
	cd scripts && chmod +x api_config.sh && ./api_config.sh
build:
	cd src && npm run build
start:
	cd src && npm run dev

docker-build:
	cd src && docker build -t kube-notes-frontend .
docker-start:
	cd src && docker run -p 3000:3000 kube-notes-frontend