var app = angular.module('DigRank',[]);
app.controller('MainCtrl', [
  '$scope',
function($scope){
  $scope.title = 'Top DigiRankers';
  $scope.state = 'California';
  $scope.users  = [
                  {name:'Ayodele Olufawo',
                  rank: 'Gold',
                  currency : 20,
                  rankdate : new Date('2016','03','18'),
                  pic :'https://pbs.twimg.com/profile_images/660946436801101824/niM7azZS.jpg',
                  img:'https://google.com',
                  likes:0,
                  dislikes:0

                  },

                  {name:'Mike Will',
                  rank: 'platinum',
                  currency : 40,
                  rankdate : new Date('2016','05','15'),
                  pic :'http://www.ikea.com/gb/en/images/products/myttinge-picture-love__0455526_pe603579_s4.jpg',
                  img:'https://yahoo.com',
                  likes:0,
                  dislikes:0,
                  }
                  ];
  $scope.plusOne = function(index){
    $scope.users[index].likes += 1;
  };
  $scope.minusOne = function(index){
    $scope.users[index].dislikes += 1;
  };
}]);
