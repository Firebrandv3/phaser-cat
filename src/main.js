import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'

const game = window.game = new Phaser.Game(800, 600, Phaser.WEBGL, '')
game.state.add('Boot', BootState)
game.state.add('Splash', SplashState)
game.state.add('Game', GameState)

game.state.start('Boot')

