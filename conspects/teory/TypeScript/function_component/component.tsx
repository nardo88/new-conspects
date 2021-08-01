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


class ClassComponent extends React.Component {
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

