var ASSETS_TYPE = 'ebook';

var Manager;

(function () {
    var asset = require('/modules/asset.js');

    Manager = asset.Manager;

    /*var list = Manager.prototype.list;

    Manager.prototype.list = function (paging) {
        var items = list.call(this, paging);
        //return items.slice(0, 12);
        return items;
    };  */
}());

var assetLinks = function (user) {
    return {
        title: 'E-Books',
        links: [
            {
                title: 'E-Books',
                url: ''
            },
            {
                title: 'Bookmarks',
                url: 'bookmarks',
                path: 'bookmarks.jag'
            }
        ],
        isCategorySupport: true
    };
};