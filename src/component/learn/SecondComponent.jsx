const SecondComponent = () => {
    return (
        <div>
            secondComponent
        </div>
    )
}

const ThirdComponent = () => {
    const ints = [1, 2, 3]
    return (
        <div>
            {JSON.stringify(ints)}
        </div>
    )
}

export {SecondComponent, ThirdComponent}