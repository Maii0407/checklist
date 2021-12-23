//this is a module for dom related shenanigans

const DOMstuff = (function(){
    const container = document.getElementById('container');

//private section because why not
    const _makeHeader = function(){
        const upperContainer = document.createElement('div');
        upperContainer.classList.add('upper-container');
        container.appendChild(upperContainer);

        const header = document.createElement('h1');
        header.textContent = `maii checkLIST`;
        upperContainer.appendChild(header);

        return upperContainer;
    };

    const _makeMainContent = function(){
        const mainContent = document.createElement('div');
        mainContent.classList.add('mainContent-container');
        container.appendChild(mainContent);

        return mainContent;
    };

    const _makePageListContainer = function(){
        const pagesList = document.createElement('div');
        pagesList.classList.add('pagesList-container');
        document.querySelector('.mainContent-container').appendChild(pagesList);

        return pagesList;
    };

    const _makePageContainer = function(){
        const pageContainer = document.createElement('div');
        pageContainer.classList.add('page-container');
        document.querySelector('.mainContent-container').appendChild(pageContainer);

        return pageContainer;
    };

    const _makePageListHeader = function(){
        const pageListHeader = document.createElement('h1');
        pageListHeader.textContent = `PAGES`;
        document.querySelector('.pagesList-container').appendChild(pageListHeader);

        return pageListHeader;
    };

//this is for all people to see
    const makeDefault = function(){
        _makeHeader();
        _makeMainContent();
        _makePageListContainer();
        _makePageListHeader();
        _makePageContainer();
    };

    return{
        makeDefault,
    };
})();

export {DOMstuff};