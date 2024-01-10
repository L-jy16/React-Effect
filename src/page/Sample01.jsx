import React from 'react'
import Main from '../components/layout/Main'
import Section01 from '../components/sample01/Section01'
import Section02 from '../components/sample01/Section02'
import Section03 from '../components/sample01/Section03'
import Section04 from '../components/sample01/Section04'
import Section05 from '../components/sample01/Section05'

const Sample01 = () => {
    return (
        <Main>
            <Section01 />
            <Section02 />
            <Section03 />
            <Section04 />
            <Section05 />

            <section id='section06'>section06</section>
            <section id='section07'>section07</section>
            <section id='section08'>section08</section>
            <section id='section09'>section09</section>
        </Main>
    )
}

export default Sample01
