pipeline{
    agent 
    {
        any
    }
    stages{
        stage('Build') {
            steps {
                sh '''
                    npm i -D @playwright/test
                    npx palywrihgt install
                '''
            }
        }
        stage('Help') {
            steps {
                sh '''
                    npx playwright test --help
                '''
            }
        }
        stage('Testing') {
            steps {
                sh '''
                    npx playwright test --list
                    npx playwright test
                '''
            }
        }
    }
}