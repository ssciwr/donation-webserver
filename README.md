# Mailcom Donation Webserver

A web application for collecting email donations for linguistic research. This platform allows participants to donate their emails along with metadata (gender, age, language, country) for scientific analysis in the Mailcom research project at the institute of Romance Studies, Heidelberg University.

## About the Project

Mailcom is a linguistic research project investigating how email communication differs from traditional letter writing. The website provides an interface for research participants to:

- Learn about the research project
- Donate emails with associated metadata
- Access information about data handling and privacy
- View FAQs, blog posts, and project updates

## Tech Stack

### Frontend
- **Framework**: [SvelteKit](https://kit.svelte.dev/) (Svelte 5) with TypeScript
- **Styling**: 
  - [Tailwind CSS](https://tailwindcss.com/) v4
  - [Flowbite Svelte](https://flowbite-svelte.com/) for UI components
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/) v10.6.3

### Backend
- **Runtime**: Node.js 22
- **Database**: MySQL 9.2.0
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Server Adapter**: `@sveltejs/adapter-node`

### Infrastructure
- **Reverse Proxy**: Nginx
- **Containerization**: Docker & Docker Compose
- **SSL/TLS**: Configured for HTTPS with certificate-based encryption

### Internationalization
- Custom i18n implementation
- Supported languages: German (de), French (fr)
- Language detection from browser preferences
- Persistent language selection via localStorage

### Testing
- **E2E Testing**: Playwright
- **Unit Testing**: Vitest

### External Assets
- World map SVG by [behodgson/markedup-svg-worldmap](https://github.com/benhodgson/markedup-svg-worldmap) (Creative Commons Attribution-ShareAlike 3.0 Unported)

## Project Structure

```
donation-webserver/
├── src/
│   ├── frontend/              # SvelteKit application
│   │   ├── src/
│   │   │   ├── routes/        # Application routes/pages
│   │   │   ├── lib/           # Shared libraries
│   │   │   │   ├── components/  # Reusable components
│   │   │   │   ├── i18n/      # Translation files
│   │   │   │   └── server/    # Server-side code (DB schema, DB connection)
│   │   │   └── app.html
│   │   ├── static/            # Static assets
│   │   ├── drizzle/           # Database migrations
│   │   └── package.json
│   └── nginx/                 # Nginx configuration
│       ├── conf/              # nginx.conf
│       └── keys/              # SSL certificates
├── Dockerfile                 # Multi-stage Docker build
├── docker-compose.yml         # Docker Compose configuration
└── README.md
```

## Deployment

The application is deployed using Docker Compose with three main services:

### Services

1. **nginx** - Reverse proxy handling HTTPS and routing requests to the application
2. **mailcom** - The SvelteKit application (Node.js server)
3. **db** - MySQL database server

### Prerequisites

- Docker installed
- SSL certificates placed in `src/nginx/keys/`
- `.env` file configured with database credentials and other environment variables

### Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# Database Configuration
MYSQL_HOST=db
MYSQL_PORT=3306
MYSQL_USER=your_user
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=your_database

# Application
BUILD_MODE=false
PORT=3000
```

### Deployment Steps

1. **Build the Docker image** (if not using a pre-built image):
   ```bash
   docker build -t iulusoy/donation-webserver-frontend:latest .
   ```

2. **Prepare SSL certificates**:
   - Place your SSL certificate chain file in `src/nginx/keys/`
   - Update the certificate path in `src/nginx/conf/nginx.conf` if needed
   - The default configuration expects: `mailcom.rose.uni-heidelberg.de.pem.chain`

3. **Start the services**:
   ```bash
   docker-compose up -d
   ```

4. **Verify deployment**:
   - The application should be accessible at `https://mailcom.rose.uni-heidelberg.de`
   - HTTP requests on port 80 are automatically redirected to HTTPS
   - The database will be initialized on first run

### Docker Compose Configuration

The `docker-compose.yml` defines:
- **nginx**: Exposes ports 80 (HTTP) and 443 (HTTPS), mounts nginx config and SSL keys
- **mailcom**: Runs the application, depends on the database being healthy
- **db**: MySQL service with health checks, persistent volume storage

### Database Migrations

Database migrations are handled automatically on container startup via the `start` script, which runs:
- `pnpm db:generate` - Generates migrations from schema
- `pnpm db:push` - Applies migrations to the database

## Development

### Prerequisites

- Node.js 22+
- pnpm 10.6.3+
- MySQL 9.2.0+ (or use Docker Compose for local development)

### Setup

1. **Install dependencies**:
   ```bash
   cd src/frontend
   pnpm install
   ```

2. **Configure environment**:
   - Copy `.env.example` to `.env` (if available) or create `.env` with database credentials

3. **Run database migrations**:
   ```bash
   pnpm db:generate
   pnpm db:push
   ```

4. **Start development server**:
   ```bash
   pnpm dev
   ```

5. **Access the application**:
   - Development server: `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm test` - Run Playwright tests
- `pnpm lint` - Lint code
- `pnpm format` - Format code with Prettier
- `pnpm db:studio` - Open Drizzle Studio (database GUI)
- `pnpm db:generate` - Generate database migrations
- `pnpm db:push` - Push schema changes to database
- `pnpm db:migrate` - Run database migrations

### Database Schema

The application uses two main tables:
- `donations` - Stores donation metadata (gender, age, language, email, country)
- `newsletter` - Stores newsletter subscription emails

Schema is defined in `src/frontend/src/lib/server/schema.ts` using Drizzle ORM.

## License

See [LICENSE](LICENSE) file for details.

## Credits

- World map SVG by [behodgson/markedup-svg-worldmap](https://github.com/benhodgson/markedup-svg-worldmap) (Creative Commons Attribution-ShareAlike 3.0 Unported)

## Contact

For questions about the research project, visit the contact page on the website or reach out to the Mailcom project team at Heidelberg University via mailcom@rose.uni-heidelberg.de.
