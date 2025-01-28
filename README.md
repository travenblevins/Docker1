# Docker1
Build: docker build -t myapp:latest .
Run: docker run -d --rm --name Docker1 -p 3000:3000 myapp:latest
Go to localhost:3000

For Stack:
To adjust number of stacks adjust the number after 'replicas' in docker-compose.yaml
Deploy Stack: docker stack deploy -c docker-compose.yaml myapp-stack
Remove Stack: docker stack rm myapp-stack

