# Todo list challenge

This is a todo list, build with React and Next.js. 

### A description of the design & how I approached it
---
You can view the Figma file [here](https://www.figma.com/file/FlmD817Z3OpamsxA1jmOTh/Grant-Thornton-Todo-List?node-id=26%3A1), which will bring you through my process of designing this todo list. 

I began by wireframing the potential layout, with the goals & objectives for the page. This allowed me to quickly decide on a layout for the design. I took these sketches into Figma and began to build out high fidelity wireframes, to start positioning content. When this was complete, I moved onto creating a design system for the todo list which includes colours, typography and elements such as inputs and buttons. These helped to speed up the process of designing, as I had a pre-determined system to choose from. Using these pre-built components and the high fidelity wireframes, I was able to rapidly design the todo list, taking a mobile-first approach.

### Overview of technologies & UX
---
#### Technologies

- **React** - as this was an interactive application, React was an obvious choice to use.
- **Styled components** - implementing a dark mode feature and style changes based on state is a breeze with styled components.
- **Next.js** - as I needed a log in page, I opted for Next.js for it's /pages functionality. In hindsight, a simple *create-react-app* and *React Router* would have been sufficient.
- **Figma** - my go-to design tool: fast and intuitive. Please check the link above to view my design files for this project.
- **Firebase** - I wanted a quicky and easy database for this project, which would also allow me to implement user authentication. 

#### UX
- **Form validation** - simple form validation is carried out on inputs, with error messages to guide the user to correctly input their information.
- **Clickable areas** - all buttons on the application meet the minimum recommended target size of 44px x 44px.
- **Loaders** - loaders show when content is loading, so the user is aware something is happening.
- **Focus states** - all actions throughout the application are tabbable, with clear focus states to highlight them.
- **Empty states** - empty states encourage the user to create more tasks when there are none to show.
- **Contrast** - the application contains sufficient contrast on the vast majority of elements, however it could be improved with more refinement on the design system.

### Security considerations
---
As I have chosen Firebase for my user authentication, there should be a minimal risk for possibly security risks. However, if you are using the live site please feel free to sign up with a fake email to test with.

### Build and deploy the application
---

**Please note**: This project is hooked up to Firebase, using environment variables that you will not find when you clone this project. Therefore, it is probably best to test the project through the live site.

Follow the steps below to clone, build and deploy this application:
1. Clone this repo
```
git clone https://github.com/ciandm/todo-list-challenge
```
2. To install the required dependencies, `cd` into this folder and type
```
npm install
```
3. To run the project, type
```
npm run dev
```

### Login details for testing purposes
---
On the live site, you can sign up with a new account using any email address and password you like. You can also use the below test accounts:

1. Email: `johndoe@dublin.com` Password: `password2021`
2. Email: `janedoe@dublin.com` Password: `password2021`

### What I would've done given more time
---

1. **Testing** - unfortunately, I am not as strong as I'd like to be with testing React components as I've not been exposed to much of it, and it's definitely something I'd like to improve upon and become better at.
2. **Pagination** -- the list can become long easily if there are a lot of items, and pagination would be an obvious solution for this.
3. **Reminders** - integrate with an email service to send reminders that task deadlines are approaching.
4. **Categories** - categorize todos and allow the user to filter todos by their category.
5. **Better description** - expand the form for creating a todo to include more information such as locations and descriptions. Users would be able to click into each todo and view more information on them.
6. **Filter by deadlines** - allow the user to filter tasks by deadlines, so they know what's coming up.
7. **Mark as important** - allow the user to mark tasks as important, and improve the visibility for these tasks by bringing them towards the top.
8. **Interactivity** - I would've made the application more interactive, such as including animations when the user completes a task to delight the user.