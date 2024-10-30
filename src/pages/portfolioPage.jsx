import Project from "../components/project"

export default function PortfolioPage() {
    return (
    <main className="container">
        <Project repoLink={'https://github.com/TheReal4m4d3u5/soundBoard'} deployLink={'https://thereal4m4d3u5.github.io/soundBoard/'} name={'Soundboard'} altText={'soundboard'} imgLink={'assets\\soundboard.jpg'}/>
        <Project repoLink={'https://github.com/MrBalld/prework-study-guide'} deployLink={'https://mrballd.github.io/prework-study-guide/'} name={'PreWork Study Guide'} altText={'Books'} imgLink={'assets\\studyGuide.jpg'}/>
        <Project repoLink={'https://github.com/MrBalld/Module-7-challenge-Automated-README-Devan-Ballantine'} deployLink={'#'} name={'ReadME Generator'} altText={'dictionary'} imgLink={'assets\\ReadMeGen.jpg'}/>
        <Project repoLink={'https://github.com/MrBalld/Module-8-challenge-Vehicle-class-maker'} deployLink={'#'} name={'Vehicle Class Manager'} altText={'Car'} imgLink={'assets\\Car.jpg'}/>
        <Project repoLink={'https://github.com/MrBalld/Module-10-challenge'} deployLink={'#'} name={'Employee Manager'} altText={'Employee Management DataBase'} imgLink={'assets\\Manager.jpg'}/>
        <Project repoLink={'https://github.com/MrBalld/React-Portfolio-Devan-Ballantine'} deployLink={'#'} name={'This Portfolio'} altText={'Image of this portfolio'} imgLink={'#'}/>
    </main>
    );
}