# Movie Library React

This repository hosts a Movie Library application built using React. The application allows users to browse a collection of movies, view details of each movie, and search for specific movies. It serves as a demonstration of building a dynamic web application with React, utilizing components and fetching data from an API.

## Features

- Browse Movies: Users can browse a collection of movies.
- View Movie Details: Users can view detailed information about each movie.
- Search Movies: Users can search for specific movies by title.
- Dynamic UI: The application provides a dynamic and responsive user interface.

## Technologies Used

- React: JavaScript library for building user interfaces.
- React Router: Library for routing in React applications.
- JavaScript: Programming language for adding interactivity and functionality to web pages.
- TailwindCSS: Utility-first CSS framework for building custom designs.
- API Integration: Fetching movie data from an external API.

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sm-hdurjoy/movie-library-react.git
   ```

2. Navigate to the project directory:

   ```bash
   cd movie-library-react
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```
   or, if you are using Yarn:
   ```bash
   yarn add
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run start
   ```

   Or, if you are using Yarn:

   ```bash
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000`

### Usage

- Browse the collection of movies displayed on the home page.
- Click on a movie to view its details, including title, release date, and summary.
- Use the search bar to find specific movies by title.
- Explore different movies and their details at your convenience.

### Project Structure

- `public` : Public assets
- `src` : Contains the source code
  - `assets` : Static assets like images and fonts
  - `components` : Reusable components
  - `hooks` : Custom React hooks
  - `pages` : Different pages of the application
  - `routes` : Application routing

### Deployment

The application is deployed using Netlify. Follow these steps to deploy your own version:

1. Create an account on Netlify.
2. Connect your GitHub repository to the deployment platform.
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
4. Deploy the site.
