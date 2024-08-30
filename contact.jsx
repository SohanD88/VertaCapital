// ContactPage.js
import React from "react";
import { withRotate, withHover, withRandomColor } from "./animations";

function ContactPage() {
    return (
        <div>
            <h1>Contact Us</h1>
            {/* Example usage of HOCs */}
            <RotatingComponent />
            <HoverComponent />
            <RandomColorComponent />
        </div>
    );
}

const RotatingComponent = withRotate(({ animate }) => (
    <div style={animate}>Rotating Component</div>
));

const HoverComponent = withHover(({ whileHover }) => (
    <div style={whileHover}>Hover over me</div>
));

const RandomColorComponent = withRandomColor(({ animate, onClick }) => (
    <div style={animate} onClick={onClick}>
        Click to Change Color
    </div>
));

export default ContactPage;
