# Observer pattern example via React TypeScript and Context API

This simple app is demonstrates the difference between an adhoc solution of state management where components communicate directly via props, and a solution following the Observer pattern, using Context API. 

## Installation
* Has Node v18.20.4 or above installed
* Clone this repo
* Cd into the project directory
* Run <code>git fetch --all --tags</code>
* Run <code>npm install</code>, wait for finish, then run <code>npm run dev</code>

## Adhoc solution
* Run <code>git checkout tags/1.0-adhoc</code>
* Open the web page on your browser, and click the button
* The button, which is lcoated in ParentComponent, increment the 'count' state (also stored in Parent). This 'count' state is then passed to the ChildComponent to display again.
* This solution is okay for this situation, but will become problematic if there were more nested child components, or if we wanted to use this 'count' value in different components not related to ParentComponent.

## Observer Pattern using Context API
* Run <code>git checkout tags/2.0-observer</code>
* CounterContext is the subject that holds the 'count' state and the 'increment' method. Components that consume this context will 'observe' any changes to count.
* With this solution, any component anywhere in the app can use the 'increment' method and the 'count' state.
