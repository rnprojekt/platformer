export default {
  tileSize: 16,
  tiles: {
    0: {
      name: 'air',
      colour: '#fff',
      friction: {
        x: 0.98,
        y: 0.98
      },
      acceleration: {
        x: 0.1,
        y: 1
      }
    },
    1: {
      name: 'ground',
      colour: '#c89858',
      jump: true,
      solid: true,
      friction: {
        x: 0.75,
        y: 0.9
      }
    },
    2: {
      name: 'slime',
      colour: '#00b00a',
      alpha: 0.6,
      foreground: true,
      jump: true,
      friction: {
        x: 0.6,
        y: 0.6
      },
      acceleration: {
        x: 1,
        y: 1
      },
      gravity: {
        x: 0,
        y: 80
      },
      forcePriority: true,
      farConvolution: {
        dryWet: 0.05,
        kay: 'ir-cave'
      },
      nearConvolution: {
        dryWet: 1,
        key: 'ir-muffler'
      }
    },
    3: {
      name: 'ice',
      colour: '#8ddcff',
      jump: true,
      solid: true,
      friction: {
        x: 0.98,
        y: 0.98
      },
      acceleration: {
        x: 0.1,
        y: 0.8
      }
    },
    4: {
      name: 'elevation',
      colour: 'rgba(255, 0, 255, 0.3)',
      jump: false,
      foreground: true,
      gravity: {
        x: 0,
        y: -1000
      },
      forcePriority: true
    },
    5: {
      name: 'water',
      colour: '#484888',
      alpha: 0.6,
      jump: true,
      foreground: true,
      gravity: {
        x: 0,
        y: -1000
      },
      friction: {
        x: 0.75,
        y: 0.75
      },
      forcePriority: true,
      farConvolution: {
        dryWet: 0.05,
        kay: 'ir-cave'
      },
      nearConvolution: {
        dryWet: 1,
        key: 'ir-muffler'
      }
    },
    6: {
      name: 'dirt',
      colour: '#706008',
      jump: true,
      solid: true,
      friction: {
        x: 0.75,
        y: 0.9
      }
    },
    7: {
      name: 'platform',
      colour: '#605850',
      jump: true,
      solid: true,
      friction: {
        x: 0.75,
        y: 0.9
      }
    }
  },
  data: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7, 0, 0, 1, 1],
    [1, 1, 5, 1, 1, 0, 7, 7, 7, 7, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 6, 6, 3, 3, 3, 3, 3, 3, 3, 0, 1, 1, 0, 0, 0, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 1, 1, 0, 0, 0, 1, 1],
    [1, 1, 5, 1, 1, 1, 1, 1, 1, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 6, 6, 0, 1, 1, 0, 0, 7, 1, 1],
    [1, 1, 5, 1, 1, 1, 1, 1, 1, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 7, 5, 5, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 5, 5, 5, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 5, 5, 5, 5, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 5, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 1, 1, 5, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 1]
  ],
  entities: [{
    type: 'player',
    location: {x: 6, y: 4}
  }, {
    type: 'coin',
    location: {x: 5, y: 7}
  }, {
    type: 'coin',
    location: {x: 5, y: 8}
  }, {
    type: 'coin',
    location: {x: 5, y: 9}
  }, {
    type: 'coin',
    location: {x: 3, y: 2}
  }, {
    type: 'coin',
    location: {x: 13, y: 6}
  }, {
    type: 'coin',
    location: {x: 15, y: 6}
  }, {
    type: 'coin',
    location: {x: 17, y: 6}
  }, {
    type: 'coin',
    location: {x: 23, y: 5}
  }, {
    type: 'coin',
    location: {x: 25, y: 5}
  }, {
    type: 'coin',
    location: {x: 27, y: 5}
  }, {
    type: 'coin',
    location: {x: 36, y: 9}
  }, {
    type: 'coin',
    location: {x: 30, y: 10}
  }, {
    type: 'coin',
    location: {x: 17, y: 12}
  }, {
    type: 'coin',
    location: {x: 18, y: 12}
  }, {
    type: 'coin',
    location: {x: 7, y: 13}
  }, {
    type: 'coin',
    location: {x: 5, y: 20}
  }, {
    type: 'coin',
    location: {x: 8, y: 23}
  }, {
    type: 'coin',
    location: {x: 5, y: 26}
  }, {
    type: 'coin',
    location: {x: 8, y: 29}
  }, {
    type: 'coin',
    location: {x: 5, y: 32}
  }, {
    type: 'coin',
    location: {x: 5, y: 38}
  }, {
    type: 'coin',
    location: {x: 8, y: 35}
  }, {
    type: 'coin',
    location: {x: 8, y: 41}
  }, {
    type: 'coin',
    location: {x: 21, y: 19}
  }, {
    type: 'coin',
    location: {x: 27, y: 18}
  }, {
    type: 'coin',
    location: {x: 30, y: 18}
  }, {
    type: 'coin',
    location: {x: 33, y: 19}
  }, {
    type: 'coin',
    location: {x: 39, y: 8}
  }, {
    type: 'coin',
    location: {x: 24, y: 19}
  }]
};
