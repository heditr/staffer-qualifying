import React from 'react';

const NavigationContext = React.createContext();

export class NavigationProvider extends React.Component {
    constructor(props) {
        super(props);

        // Store the `navigation` object in component state
        this.state = {
            pathname: window.location.pathname,
            navigate: this.navigate,
        };

        // Handle the user clicking the `back` and `forward` buttons
        window.onpopstate = () => {
            this.setState({ pathname: window.location.pathname });
        };
    }

    render() {
        return (
            <NavigationContext.Provider value={this.state}>
                { this.props.children }
            </NavigationContext.Provider>
        );
    }

    // The navigation's `navigate` method updates `navigation` object, and uses
    // the browser's `pushState` method to change the window's URL.
    navigate = (pathname) => {
        this.setState({ pathname });

        // Update the URL within the browser's history
        window.history.pushState(null, null, pathname);
    }
}

export const Link = ({ activeStyle, ...props }) => <NavigationContext.Consumer>
    {(navigation) => <a
        {...props}
        // If the navigation context's `pathname` matches the link's
        // `href`, then show the active styles
        style={{
            ...props.style,
            ...(navigation.pathname === props.href ? activeStyle : {}),
        }}
        // When the user clicks the link, handle it by calling
        // the `navigate` function that was passed in via context.
        onClick={(e) => {
            e.preventDefault();
            navigation.navigate(props.href);
        }}
    />
    }
</NavigationContext.Consumer>;

export const Route = ({ children, href }) => (
    <NavigationContext.Consumer>
        {(navigation) => (navigation.pathname === href ? children : null)}
    </NavigationContext.Consumer>
);
