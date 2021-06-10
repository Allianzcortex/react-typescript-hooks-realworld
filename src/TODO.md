# TODO

1. use context(https://reactjs.org/docs/context.html) to pass
global state (e..g authProvider)

2. set snackbar with a proper color and location

3. when input is invalid, set the color and input box to be auto-focused so 
more user-friendly

4. add loading component after sending the request

5. figure it out why tagList is rendering 2 times(seems not related to strict mode) and
why useCallBack() cannot work here

6. It seems current auth system is broken(it should be based on whether token
is stored in local). and need to add `privateRouter` to enable permission check

7. add utils to check whether JWT token is valid

8. add codecov support && generate badge(along with build-passing)

