pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/nolawit23/react-cicd-project'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                bat 'xcopy dist C:\\deploy\\react-app /E /I /Y'
            }
        }

        stage('Docker Build & Run') {
            steps {
                // Build Docker image
                bat 'docker build -t react-cicd-app .'
                
                // Stop & remove any old container (optional, avoids conflicts)
                bat 'docker stop react-cicd-app || echo No running container'
                bat 'docker rm react-cicd-app || echo No container to remove'
                
                // Run container in detached mode on port 80
                bat 'docker run -d -p 80:80 --name react-cicd-app react-cicd-app'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed!'
        }
    }
}
