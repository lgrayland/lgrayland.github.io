function PortfolioService($filter){

    var PortfolioService = {};
    var _projects = {
        'projects':
            [
                {
                    'title': "Quizzery",
                    'date': '2015-02-15',
                    'author':'',
                    'technologies': ['Ruby on Rails', 'HAML', 'SASS', 'Omniauth for Facebook', 'Devise', 'Cancan', 'CarrierWave', 'Rmagick', 'Acts As State Machine', 'Acts As List', 'AWS'],
                    'img': 'quizzery.png',
                    'thumb':'',
                    'carousel':'quizzery.png',
                    'client':'',
                    'website': "http://quizzery.herokuapp.com",
                    'details': 'An app that allows users to create their own pub quizzes, invite friends to participate, save and reuse popular quizzes.'
                },
                {
                    'title': "Hacky-Memory",
                    'date': '2015-01-25',
                    'author':'',
                    'technologies': ['HTML5', 'CSS', 'Angular JS', 'JSon', 'AWS'],
                    'img': 'hackymem.png',
                    'thumb':'',
                    'carousel':'',
                    'client':'',
                    'website':'',
                    'details':'This project was the product of a 24-hour team hackathon. We were not given any for of brief, but wanted to build something fun for the class. we also made a picture diary of our experience during the hackathon. I was responsible for using Angular JS to provide the logic for the gameplay.',
                    'id':'3'
                },
                {
                    'title': "BillShare",
                    'date': '2015-01-05',
                    'author': '',
                    'technologies': ['Ruby on Rails', 'Foundation', 'CarrierWave', 'Cancan', 'HTML5 audio tag', 'Devise', 'Rmagick', 'Acts As Commentable'],
                    'img': 'billshare.png',
                    'thumb':'',
                    'carousel':[],
                    'client':'',
                    'website':'',
                    'id': '2',
                    'details': 'This was the second project for the coding bootcamp. The brief was to build a bill-sharing app allowing users to create groups and divide the bills by the number of members in that group. Each member was to then recieve an email detailing the bill and how much they needed to pay towards it.'
                },
                {
                    'title': "SoundRails",
                    'date': '2014-02-15',
                    'author': '',
                    'technologies': ['Ruby on Rails', 'Foundation', 'CarrierWave', 'Cancan', 'HTML5 audio tag', 'Devise', 'Rmagick', 'Acts As Commentable'],
                    'img': 'soundrails.png',
                    'carousel':[],
                    'client':'',
                    'website':'',
                    'details': 'This was the first project during my codin bootcamp. The brief was to build a music-sharing app where artists can upload and fans can follow artists and comment on their tracks.',
                    'id': '1'
                }
            ]
    };

    var _project = {};

    PortfolioService.index = function(){
        return _projects.projects
    };

    PortfolioService.show = function(id){
        _project = $filter('filter')(_projects.projects, {id:id})[0];
        return _project
    };

    return PortfolioService;
}
angular
    .module('public.portfolio')
    .factory('PortfolioService', PortfolioService);