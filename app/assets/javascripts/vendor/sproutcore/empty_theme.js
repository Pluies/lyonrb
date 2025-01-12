/* >>>>>>>>>> BEGIN source/theme.js */
// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/** @class
  @extends SC.Theme
  @since SproutCore 1.1
*/
SC.EmptyTheme = SC.BaseTheme.create({
  name: 'sc-empty'
});

SC.Theme.addTheme(SC.EmptyTheme);
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('sproutcore/empty_theme');
