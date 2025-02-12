# Transactly - Monorepo with Next.js and Tailwind CSS

Transactly is a comprehensive financial application designed as a monorepo, which includes multiple Next.js applications sharing a UI library. The project leverages modern web technologies to provide a seamless user experience, focusing on user authentication, transaction management, and a responsive design. This document provides an in-depth overview of the project, its features, architecture, and how to get started.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Transactly aims to simplify financial transactions and user management through a user-friendly interface. The application is built with a focus on modularity and reusability, allowing developers to easily extend and maintain the codebase. The monorepo structure enables efficient collaboration and code sharing across different applications within the project.

### Key Components

1. **User Application**: The main frontend application where users can sign up, log in, and manage their transactions.
2. **Bank Webhook Service**: A backend service that listens for incoming webhook requests from banks to update user balances and transaction statuses.
3. **Shared UI Library**: A collection of reusable UI components built with Tailwind CSS, ensuring a consistent look and feel across applications.

## Features

- **User Authentication**: Secure user authentication using NextAuth.js, supporting both email/password and GitHub login.
- **Transaction Management**: Users can view, create, and manage their transactions seamlessly.
- **Responsive Design**: The application is fully responsive, providing an optimal experience on both desktop and mobile devices.
- **Real-time Updates**: The application updates user balances and transaction statuses in real-time through webhook integration.
- **Error Handling**: Comprehensive error handling and user feedback mechanisms to enhance user experience.
- **Modular Architecture**: The codebase is organized into modules, making it easy to maintain and extend.

## Architecture

The project follows a modular architecture, with the following key components:

- **Frontend (User Application)**:
  - Built with Next.js, allowing for server-side rendering and static site generation.
  - Utilizes React for building interactive UI components.
  - Tailwind CSS is used for styling, providing utility-first CSS classes for rapid UI development.

- **Backend (Bank Webhook Service)**:
  - Built with Express.js to handle incoming webhook requests from banks.
  - Integrates with Prisma for database management, allowing for easy data manipulation and querying.

- **Shared Libraries**:
  - A UI library containing reusable components such as buttons, forms, and modals.
  - Shared configurations for ESLint and TypeScript to ensure code quality and consistency across the project.

## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: A superset of JavaScript that adds static types, enhancing code quality and maintainability.
- **Prisma**: An ORM for database management, providing a type-safe database client.
- **Express**: A web framework for Node.js used in the bank webhook service.
- **Docker**: For containerization and deployment, ensuring consistent environments across development and production.
- **NextAuth.js**: A complete open-source authentication solution for Next.js applications.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/transactly.git
   cd transactly
   ```


3. **Set Up Environment Variables**: Create a `.env` file in the root directory and add the necessary environment variables, such as database connection strings and API keys.

## Running the Application
The easiest way to run the application is to use Docker. You can build and run the Docker containers using the following commands:

```bash
docker-compose up
```

This command will start both the user app and the bank webhook service, making them accessible on their respective ports.
