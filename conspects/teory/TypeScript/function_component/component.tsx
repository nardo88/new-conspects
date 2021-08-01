import React from 'react'


type PropTypes = {
    pages: number
    currentPage: number
    title: string
}

const Component: React.FC<PropTypes> = ({pages, currentPage, title}) => {
return (
        <></>
    )
}


type PropsType = {
    pages: number
    currentPage: number
    title: string
}

type StateType = {
    users: Array<string>
}

class ClassComponent extends React.Component<PropsType, StateType> {

    
    componentDidMount() {
        const {pages, currenpage, title} = this.props
    }

    render() {
        return (
            <>
                {/* ...some JSX */}
            </>
        )
    }
}

