# Showcase

## Client Components

Any component that requires user interaction, must render on client.

## Example

```tsx
"use client"

export function ClickableButton() {
    return (
        <div onClick={() => console.log("I was clicked on client")}>I am a button</>
    )
}

```
