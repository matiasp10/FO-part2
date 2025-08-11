const Total = ({ parts }) => {

    const total = parts.reduce((acc, cv) => {
        return acc + cv.exercises
    }, 0)

    return (
        <>
            <strong>Number of exercises {total}</strong>
        </>
    )
}

export default Total