/**
 * Copyright 2002-2013, University of Colorado
 * buttons and model control elements view
 *
 * @author Anton Ulyanov (Mlearner)
 */

define( function( require ) {
  'use strict';
  var Node = require( 'SCENERY/nodes/Node' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ResetAllButton = require( 'view/control/ResetAllButton' );
  var Strings = require( 'Strings' );
  var AquaRadioButton = require( 'SUN/AquaRadioButton' );
  var Text = require( 'SCENERY/nodes/Text' );
  var BottomControlPanel = require( 'view/control/BottomControlPanel' );
  var RadioGroup = require( 'view/control/RadioGroup' );
  var PlayPauseButton = require( 'view/control/PlayPauseButton' );
  var RestartButton = require( 'view/control/RestartButton' );
  var PulseButton = require( 'view/control/PulseButton' );
  var WOASTRulers = require( 'view/control/WOASTRulers' );
  var WOASTLine = require( 'view/control/WOASTLine' );
  var WOASTTimer = require( 'view/control/WOASTTimer' );

  function ControlPanel( model ) {
    Node.call( this, { scale: 1, renderer: 'svg' } );

    this.addChild( new RadioGroup( {radio: ['manual', 'oscillate', 'pulse'], property: model.modeProperty, x: 5, y: 5} ) );
    this.addChild( new RestartButton( model, {x: 100, y: 25} ) );
    this.addChild( new PulseButton( model, {x: 130, y: model.height - 135} ) );
    this.addChild( new RadioGroup( {radio: ['fixedEnd', 'looseEnd', 'noEnd'], property: model.typeEndProperty, x: model.width - 100, y: 5} ) );
    this.addChild( new Node( {scale: 0.7, x: 210, y: model.height - 120, children: [
      new AquaRadioButton( model.speedProperty, 0.25, new Text( Strings.speedSlow, {fontSize: 15} ), {radius: 12} ),
      new AquaRadioButton( model.speedProperty, 1, new Text( Strings.speedNormal, {fontSize: 15} ), {radius: 12, x: 130} )
    ]} ) );
    this.addChild( new BottomControlPanel( model ) );
    this.addChild( new PlayPauseButton( model, {x: 360, y: model.height - 145} ) );
    this.addChild( new Node( { scale: 0.7, right: model.width - 5, y: 430, children: [new ResetAllButton( function() { model.reset(); } )] } ) );
    this.addChild( new WOASTLine( model ) );
    this.addChild( new WOASTTimer( model ) );
    this.addChild( new WOASTRulers( model ) );
  }

  inherit( Node, ControlPanel );

  return ControlPanel;
} );