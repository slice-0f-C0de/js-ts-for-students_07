export type ManType = {
    name: string,
    age: number,
    lessons: Array<{ title: string }>,
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType
beforeEach(() => {
    props = {
        name: "Daniil",
        age: 25,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: "Zvezdnaya street"
            }
        }
    }
})