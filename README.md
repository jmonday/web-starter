# Initial Setup

The first time you start this project will be slightly different than when you work in this project on a day-to-day level. For the initial setup and configuration, follow the steps below.

1. Download and install Docker Desktop from https://docs.docker.com/desktop/. After install, start Docker Desktop.
1. Open a terminal window, change directory to this project's root folder.
1. Copy the distribution environment configuration via `cp .env.dist .env` and edit the variables to fit your needs.
1. From the terminal add the following entries to your host file via `sudo vim /etc/hosts`. Note, these entries are only necessary for local development. Save and exit `vim` via `:wq`.
    1. `127.0.0.1 app.local`
    1. `127.0.0.1 backend.app.local`
1. Copy the default environment variables file for the backend:
    1. `cp backend/.env.example backend/.env`
1. Start the stack via `docker-compose up --build -d`. Note, this step will take some time to build the stack for the first time.
1. Configure the backend's application key via:
    1. `docker exec -it jm-backend php artisan key:generate`
1. Migrate and seed the database with the following commands:
    1. `docker exec -it jm-backend php artisan migrate`
    1. `docker exec -it jm-backend php artisan db:seed`
1. The following services will be available once the stack is completely built:
    1. Frontend: http://app.local/
    1. Backend: http://backend.app.local/
    1. Administrative UI: http://backend.app.local/nova (Not included because of licensing.)
    1. Telescope Dashboard: http://backend.app.local/telescope
    1. Horizon Dashboard: http://backend.app.local/horizon
    1. Postgres: localhost:7531

# Working Day-to-day 

Once you've successfully completed the initial setup, the day-to-day startup becomes much easier. The initial setup only needs to be done once, but the following steps will need to be run if Docker is ever stopped.

1. Open a terminal window, change directory to this project's root folder.
1. Start the stack via `docker-compose up --build -d`. Note, this step will take some time to build the stack for the first time.
1. Once the stack has finished building you can run any of the services defined in the initial setup steps.
