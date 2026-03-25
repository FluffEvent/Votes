# Fluff Event Votes Dashboard

This is a dashboard for the Fluff Event votes.


## Getting started

### Development

Use this command to run the site locally for development:

```sh
docker compose watch
# or: docker compose up -d
```

Using `watch`, you'll benefit from file changes watching for sync & rebuild.

Use [DockerC](https://github.com/matiboux/dockerc) for shortened commands: `dockerc - @w`.

The site will be available at [http://localhost:8080](http://localhost:8080).


### Production

Use this command to run the site locally for production:

```sh
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
# or: docker compose -f docker-compose.yml up -d
```

Use [DockerC](https://github.com/matiboux/dockerc) for shortened commands: `dockerc prod`.

The site will be available at [http://localhost:8080](http://localhost:8080).


## License

- Data is licensed under a [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](LICENSE-DATA).  
  Data is located in the [`app/app/public/data/`](app/app/public/data/) folder.  
  Copyright 2023-2026 [Fluff Event](https://fluffevent.fr).

- Code is licensed under a [MIT License](LICENSE).  
  Code is all the other files.  
  Copyright 2023-2026 [Matiboux](https://matiboux.me).
