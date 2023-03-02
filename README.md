# Take Home Test

## Getting started

### Preriquisites

- docker 
```
curl https://get.docker.com/ | sh
```
	
### Run the project 

Copy the .env.example file and set the environment variables for backend project 
```
cp backend/.env.example backend/.env
```

Copy the .env.example file and set the environment variables for frontend project 
```
cp frontend/app/.env.example frontend/app/.env
```

```
docker compose up --build -d
```


### ⚠️ Considerations

- Commit component needs to be splitted or more components (atoms)
- useCommit and useBranches hooks needs to be refactorized and their data needs to be parsed on a different file
- The docker environment is not properly set, I mean, on a production environment is better set another container for nginx and load the frontend as an static website instead of use npm start and run a dev environment
- The backend server needs to be refactorized  