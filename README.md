
<h1 align="center"><b>✨ Social Link - A Social App ✨</b></h1>

![Demo App](/public/image.png)


## Highlights:

- 🚀 Tech stack: Next.js App Router, Postgres, Prisma, Clerk & TypeScript
- 💻 Server Components, Layouts, Route Handlers, Server Actions
- 🔥 loading.tsx, error.tsx, not-found.tsx
- 📡 API Integration using Route Handlers
- 🔄 Data Fetching, Caching & Revalidation
- 🎭 Client & Server Components
- 🛣️ Dynamic & Static Routes
- 🎨 Styling with Tailwind & Shadcn
- 🔒 Authentication & Authorization
- 📤 File Uploads with UploadThing
- 🗃️ Database Integration with Prisma
- 🚀 Server Actions & Forms
- ⚡ Optimistic Updates

## Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
UPLOADTHING_TOKEN=
```

### Run the app

```shell
npm run dev
```

## Key Features
### User Authentication and Management

- Integrated with Clerk for user authentication and management, handling sign-in, sign-up, and user sessions.
- Functions to synchronize user data from Clerk's authentication system to the app's database using Prisma.
  
### Posts Management

- Users can create, delete, like, and comment on posts. This involves interactions with a backend database where posts are stored along with user-generated content like comments and likes.
- Real-time feedback is provided for interactions such as liking or commenting on posts via toast notifications.

### Dynamic User Profiles

- Profile pages that display user information (bio, location, website, posts, likes, followers, and following count).
- Users can view their own profiles as well as others', with options to follow/unfollow, like posts, and view liked posts.

### Theme Customization

- Supports dark and light modes that users can toggle between, enhancing user experience and accessibility.
### Notifications

- A notifications system to alert users about interactions with their posts or profiles, such as likes, comments, or new followers.
### File Uploads

- Utilizes a custom file upload setup that might be used for profile pictures or post images, enhancing posts with visual content.
### Responsive Design

- Mobile and desktop compatibility with specific components like mobile and desktop navigation bars, ensuring the app is usable on various devices.
### UI Components

- Extensive use of custom UI components such as buttons, modals, alerts, and tabs that are styled and behave consistently across the platform.
- Components like FollowButton, PostCard, and various dialogs and modals provide interactive elements that are crucial for user engagement.
### Utility and Helper Functions

- Uses utility functions for class name merging and conditional styling, facilitating more complex CSS management in a React environment.
### Tech Stack
- **Next.js:** Used for server-side rendering and static site generation, enhancing SEO and performance.
- **Prisma:** ORM for handling database operations in a type-safe manner, interacting with a relational database like PostgreSQL or MySQL.
- **Clerk:** Manages user authentication and session management securely and efficiently.
- **Tailwind CSS:** For styling, leveraging utility-first CSS for rapid UI development.
- **Radix UI:** Provides accessible UI primitives that can be composed into more complex components.
- **next-themes:** Manages theme switching functionality within the app.
- **Lucide Icons:** Provides icons used across the application for a visually consistent and accessible UI.
  
## Deployment and Development
The app likely includes development tools and configurations like ESLint, Prettier, and various Next.js configurations for optimal development experience and deployment performance.
This detailed functionality shows a robust social networking platform with modern web technologies and design principles, emphasizing user interaction, visual appeal, and accessibility.

## Still need help?
Open an issue on our GitHub repository, and we will help you as soon as possible.

Enjoy exploring and extending this project! Feel free to contribute and suggest improvements.

## Contact

If you want to contact me you can reach me at [Twitter](https://x.com/SandhitK).

## Developer
<table>
    <tr align="center">
        <td>
        Sandhit Karmakar
        <p align="center">
            <img src = "https://avatars.githubusercontent.com/u/90787826?v=4" width="150" height="150" alt="Dhruv Shah">
        </p>
            <p align="center">
                <a href = "https://github.com/Sandhit06">
                    <img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36" alt="GitHub"/>
                </a>
                <a href = "https://www.linkedin.com/in/sandhit-karmakar/" target="_blank">
                    <img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36" alt="LinkedIn"/>
                </a>
                <a href = "mailto:sandhitkarmakar@gmail.com" target="_blank">
                    <img src = "https://www.iconninja.com/files/312/807/734/share-send-email-chat-circle-message-mail-icon.svg" width="36" height="36" alt="Email"/>
                </a>
            </p>
        </td>
    </tr>
</table>

<p align="center">
    Made with ❤️ by <a href="https://github.com/Sandhit06">Sandhit Karmakar</a>
</p>
