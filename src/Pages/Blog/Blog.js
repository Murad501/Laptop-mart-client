import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="my-10">
        <h1 className="text-2xl lg:text-5xl font-bold mb-10">
          How does prototypical inheritance work?
        </h1>
        <div className="my-10">
          <p className="text-lg font-semibold hover:text-emerald-600">
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the Prototype of an object,
            we use Object.getPrototypeOf and Object.
          </p>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-2xl lg:text-5xl font-bold mb-10">
          What is the difference between react, vue, and angular?
        </h1>
        <div className="my-10">
          <p className="text-lg font-semibold hover:text-emerald-600">
            <span className="font-bold text-xl">React: </span>
            Where Angular gives you everything, React gives you only one thing:
            A library for rendering content to the DOM and controlling it
            efficiently thereafter. It's also all about components and all about
            building user interfaces from components. It also gives you all the
            "tools" you need to define what should be rendered in which way
            under which circumstances. <br />
            But it does not include built-in form validation support. It does
            not include a router (for rendering different components based on
            URL changes) and it does not ship its own Http client. It has some
            state management support built-in but not for all scenarios. It also
            does not come with any other special features and it's definitely
            "slimmer" than Angular in that regard. For those features, you have
            to rely on the (arguably quite active) React community.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            <span className="font-bold text-xl">Vue: </span>
            Vue is a framework which kind of sits between React and Angular.
            It's not as "big" as Angular but it definitely includes more
            features than React does. Vue does give you built-in state
            management and it also ships with a built-in router. It does,
            however, not include form validation or Http client functionalities.{" "}
            <br />
            Just like Angular and React, the core of Vue is all about building
            user interfaces by combining re-usable components. But beyond that,
            it gives you a bit more than React and a bit less than Angular.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            <span className="font-bold text-xl">Angular: </span>
            Angular projects use TypeScript, which is a superset (i.e. an
            addition) to JavaScript. TypeScript doesn't run in the browser but
            Angular projects include tools that will compile the TypeScript code
            down to browser-compatible JavaScript code under the hood.
            <br />
            You can see, that Angular uses a TypeScript feature called
            "Decorators" (@Component) to attach extra data to normal classes
            (UserListComponent). You write code like this and Angular, behind
            the scenes, takes care about manipulating and "connecting" the real
            DOM.
          </p>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-2xl lg:text-5xl font-bold mb-10">
          What is a unit test? Why should we write unit tests?
        </h1>
        <div className="my-10">
          <p className="text-lg font-semibold hover:text-emerald-600">
            Unit Testing is a testing method that tests an individual unit of
            software in isolation. Unit testing for React Apps means testing an
            individual React Component. Unit Testing is important for React
            Apps, as it helps in testing the individual functionality of React
            components.
          </p>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-2xl lg:text-5xl font-bold mb-10">
          What are the different ways to manage a state in a React application?
        </h1>
        <div className="my-10">
          <p className="text-lg font-semibold hover:text-emerald-600">
            The Four Kinds of React State to Manage
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            <span className="font-bold text-xl">Local state: </span>
            Local state is data we manage in one or another component. Local
            state is most often managed in React using the useState hook. For
            example, local state would be needed to show or hide a modal
            component or to track values for a form component, such as form
            submission, when the form is disabled and the values of a form’s
            inputs.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            <span className="font-bold text-xl">Global state: </span>
            Global state is data we manage across multiple components. Global
            state is necessary when we want to get and update data anywhere in
            our app, or in multiple components at least. A common example of
            global state is authenticated user state. If a user is logged into
            our app, it is necessary to get and change their data throughout our
            application. Sometimes state we think should be local might become
            global.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            <span className="font-bold text-xl">Server state: </span>
            Data that comes from an external server that must be integrated with
            our UI state. Server state is a simple concept, but can be hard to
            manage alongside all of our local and global UI state. There are
            several pieces of state that must be managed every time you fetch or
            update data from an external server, including loading and error
            state. Fortunately there are tools such as SWR and React Query that
            make managing server state much easier.
          </p>
          <p className="text-lg font-semibold hover:text-emerald-600">
            <span className="font-bold text-xl">Url state: </span>
            Data that exists on our URLs, including the pathname and query
            parameters. URL state is often missing as a category of state, but
            it is an important one. In many cases, a lot of major parts of our
            application rely upon accessing URL state. Try to imagine building a
            blog without being able to fetch a post based off of its slug or id
            that is located in the URL! There are undoubtedly more pieces of
            state that we could identify, but these are the major categories
            worth focusing on for most applications you build.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
