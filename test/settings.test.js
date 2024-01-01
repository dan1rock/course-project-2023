import Settings from "../src/scenes/dashboard/context/settings";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
    render(
        <Settings/>
    );
});

test('Settings renders correctly', () => {
    expect(document.getElementById("settings")).toBeInTheDocument();
});

test('Theme change is present in settings', () => {
    expect(document.getElementById("theme-switch")).toBeInTheDocument();
    expect(document.getElementsByClassName("MuiSwitch-root")[0]).toBeInTheDocument();
});
