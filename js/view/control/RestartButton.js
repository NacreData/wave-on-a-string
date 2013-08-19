/**
 * Copyright 2002-2013, University of Colorado
 * Control Restart button view
 *
 * @author Anton Ulyanov (Mlearner)
 */

define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Text = require( 'SCENERY/nodes/Text' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Strings = require( 'Strings' );
  var PushButton = require( 'SUN/PushButton' );
  var imageLoader = require( 'imageLoader' );
  var Image = require( 'SCENERY/nodes/Image' );

  function RestartButton( model, options ) {
    Node.call( this, {x: options.x, y: options.y, scale: 1} );

    var restart = function() {
      model.manualRestart();
    };
    var label = new Text( Strings.restart, {fontSize: 17, centerX: 40, centerY: 20} );

    this.addChild( new PushButton(
      new Node( {children: [new Image( imageLoader.getImage( 'button_restart_unpressed.png' ) ), label]} ),
      new Node( {children: [new Image( imageLoader.getImage( 'button_restart_hover.png' ) ), label]} ),
      new Node( {children: [new Image( imageLoader.getImage( 'button_restart_pressed.png' ) ), label]} ),
      new Node( {children: [new Image( imageLoader.getImage( 'button_restart_unpressed.png' ) ), label]} ),
      restart, {scale: 0.7} ) );
  }

  inherit( Node, RestartButton );

  return RestartButton;
} );