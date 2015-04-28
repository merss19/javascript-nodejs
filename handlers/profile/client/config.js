module.exports = ($locationProvider, $stateProvider, $urlRouterProvider) => {
  $locationProvider.html5Mode(true);

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('root', {
      abstract:    true,
      resolve:     {
        me: (Me) => Me.get()
      },
      templateUrl: "/profile/templates/partials/root",
      controller:  'ProfileRootCtrl'
    });

  var states = {
    'root.aboutme': {
      url:         "/",
      title:       'Публичный профиль',
      templateUrl: "/profile/templates/partials/aboutme",
      controller:  'ProfileAboutMeCtrl'
    },
    'root.account': {
      url:         '/account',
      title:       'Аккаунт',
      templateUrl: "/profile/templates/partials/account",
      controller:  'ProfileAccountCtrl'
    },
    'root.quiz':    {
      url:         '/quiz',
      title:       'Тесты',
      templateUrl: "/profile/templates/partials/quiz",
      controller:  'ProfileQuizResultsCtrl',
      resolve:     {
        quizResults: (QuizResults) => QuizResults.query()
      }
    },
    'root.orders':  {
      url:         '/orders',
      title:       'Заказы',
      templateUrl: "/profile/templates/partials/orders",
      controller:  'ProfileOrdersCtrl',
      resolve:     {
        orders: (Orders) => Orders.query()
      }
    }
  };

  // enabled states depend on user, are set to global variable in index.jade
  for (var key in states) {
    if (~window.profileStatesEnabled.indexOf(key)) {
      $stateProvider.state(key, states[key]);
    }
  }


};
