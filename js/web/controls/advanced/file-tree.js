
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(["../../jsgui-html", "./plus-minus-toggle-button", "./vertical-expander", "./tree-node"], 
	function(jsgui, Plus_Minus_Toggle_Button, Vertical_Expander, Tree_Node) {
		
		var stringify = jsgui.stringify, each = jsgui.eac, tof = jsgui.tof;
		var Control = jsgui.Control;
		
		// A different control to consume the resource may be best.


		// Client-side resource integration as well.


		var File_Tree = Control.extend({

			// This can be expanded to support resources.

			// May be good to have a tree that has a relatively simple interface.
			//  Perhaps a heirachical resource tree.

			'fields': [['root_directory', 'data_object']],

			// Can also have a resource as a field.


			// and can listen for the root directory field changing.

			// However, can do asyncronous get on a resource, and deferred rendering.



			'init': function(spec) {
				this._super(spec);
				
				//this.get('dom').set('tagName', 'div');
				this.get('dom').get('attributes').set('class', 'tree');
				
				
				// I think that would be a Horizontal_Menu?


				/*

				var menu_bar = new Menu_Bar({
					'context': this._context
				});
				
				this.get('content').add(menu_bar);
				*/


				
				
				var main = new Control({'context': this._context});


				main.get('dom').set('tagName', 'div');
				main.get('dom').get('attributes').set('class', 'main');
				this.get('content').add(main);
				
				
				//  This will work both on the client and the server.
				//  There will be some branching during the init process.
				//   On the client it's going to be loading some info from the to_client JSON object.
				//    However, 
				
				// and we show the directory in there too.
				
				// need to look at the actual files.
				var that = this;
	            
	            
	            
				//this.add_event_listener('set', function(target, name, set_args) {


				// or root_directory.on('change')

				// Possibly listen for events differently.
				//  Could get the data from a resource.
				//  We can set the directory, but I think resource connection would be a good mechanism for this.


				if (typeof document == 'undefined') {
					var resource = this.get('resource');

					// Needs to defer rendering as well.

					if (resource) {
						this.__status = 'waiting';

						resource.get(function(err, resource_res) {
							if (err) {
								throw err;
							} else {
								console.log('resource_res', resource_res);


								// Then those results get put into the tree.

								// Use tree nodes, not directory view items.

								// And can have file-tree-node and directory-tree-node



							}

						});
					}

						

				};



				this.add_event_listener('_set', function(event_params) {
					if (that == this) {
					    
					    console.log('event_params ' + stringify(event_params));
	                    //throw 'stop';
	                    
	                    
	                    
	                    //console.log('sig ' + 
	                    
	                    //console.log('name ' + name);
	                    //console.log('value ' + value);
	                    //console.log('event_params ' + stringify(event_params));
	                    
	                    var property_name = event_params[0];
	                    var property_value = event_params[1];
	                    
	                    if (property_name == 'root_directory') {
	                        //console.log('File_Tree setting root directory');
	                        
	                        //property_value.set('app_rel_path', '/');
	                        
	                        // then add the root item display.
	                        
	                        // would be good to give it some properties at the beginning.
	                        //  could use the 'set' command?
	                        
	                        
	                        
	                        var root_dir_view = new Directory_Item_View({
	                            'name': '/',
	                            'context': that._context
	                        });

	                        main.get('content').add(root_dir_view);
	                        
	                        // But inside that directory item view, there will be others.
	                        
	                        console.log('property_value ' + stringify(property_value));
	                        //throw 'stop';
	                        // don't get the contents of the property_value

	                        //var root_directory_contents = property_value.get('contents');
	                        var root_directory_contents = property_value;
	                        // there should also be files in that directory's contents'
	                        
	                        //console.log('');
	                        //console.log('property_value ' + stringify(property_value));
	                        //console.log('root_directory_contents ' + stringify(root_directory_contents));
	                        //throw('stop');
	                        // then add the items that display the directory contents.
	                        
	                        // nope... we maybe don't take in these Directory objects.
	                        //  Perhaps we don't need them, as extensions of Data_Object?
	                        //  

	                        console.log('root_directory_contents ' + stringify(root_directory_contents));

	                        // directories, then files

	                        var root_dir_view_subitems_content = root_dir_view.ctrl_subitems.get('content');

	                        each(root_directory_contents.directories, function(i, directoryName) {
	                        	// OK, this loop seems to take a very long time.

	                        	console.log('directoryName ' + directoryName);
	                        	var sub_dir_view = new Directory_Item_View({
	                                'name': directoryName,
	                                'context': that._context
	                            });
	                            console.log('pre add content ' + new Date().date);
	                            root_dir_view_subitems_content.add(sub_dir_view);
	                            console.log('post add content ' + new Date().date);
	                        })

	                        //throw 'stop';


	                        /*
	                        
	                        each(root_directory_contents, function(i, v) {
	                        //root_directory_contents.each(function(i, v) {
	                            //console.log('i ' + i);
	                            
	                            //console.log('root_directory_contents ' + stringify(v));
	                            
	                            // with it as a Data_Object, we should be able to get it's class name.
	                            //  __type_name;
	                            
	                            //for (var k in v) {
	                            //	console.log('k ' + k);
	                            //	
	                            //}
	                            
	                            //console.log('v._class_name ' + v._class_name);
	                            
	                            // anyway, do instanceOf
	                            

	                            var is_directory = v instanceof Directory;
	                            
	                            //console.log('is_directory ' + is_directory);
	                            
	                            var is_file = v instanceof File;
	                            
	                            if (is_directory) {
	    
	                                var name = v.get('name');
	                                //console.log('name ' + name);
	                                
	                                var sub_dir_view = new Directory_Item_View({
	                                    'name': name,
	                                    'context': that._context
	                                });
	                                // and set the content?
	                                var v_contents = v.get('contents');
	                                
	                                //console.log('v_contents ' + stringify(v_contents));
	                                
	                                //console.log('v_contents.length() ' + stringify(v_contents.length()));
	                                
	                                // setting the model content?
	                                //  the model would include the name of the object.
	                                
	                                // not setting the controls content I think.
	                                //  If we are not adding to the controls...
	                                //   If the content is not a control, it could do a content input filter.
	                                //    So it can turn the model into something that interacts with the UI controls.
	                                
	                                // Polymorphism can check if something being added to the content is a user control or a model.
	                                //  Will have ways to make the appropriate user control for a particular data_object.
	                                //  map_data_object_ui_controls
	                                //   and there will be different sorts of editors and viewers for different needs
	                                //    admin
	                                //    publish
	                                
	                                //sub_dir_view.set('content', )
	                                if (v_contents.length() > 0) {
	                                    //throw('stop');
	                                    sub_dir_view.set_content_from_model(v_contents);
	                                }
	                                
	                                
	                                
	                                
	                                
	                                //sub_dir_view.set()
	                                //root_dir_view.get('content').add(sub_dir_view);
	                                root_dir_view.ctrl_subitems.get('content').add(sub_dir_view);
	                            }
	                            
	                            if (is_file) {
	                                var name = v.get('name');
	                                //console.log('name ' + name);
	                                var file_view = new File_Item_View({
	                                    'name': name,
	                                    'context': that._context
	                                });
	                                
	                                
	                                
	                                //root_dir_view.get('content').add(sub_dir_view);
	                                root_dir_view.ctrl_subitems.get('content').add(file_view);
	                                
	                                
	                            }
	                            //ctrl_subitems
	                            
	                            //console.log('v ' + stringify(v));
	                        })
	                        */
	                        
	                        
	                        //throw('3) stop');
	                        
	                        
	                        
	                        // create the 
	                        
	                        //file_tree.set('root_directory', property_value);
	                        // set the root directory in the file tree.
	                        //  the same 
	                        //throw('stop');
	                    }
					    
					    
					}
					
					
				});
				
				
				
				
			}
		});
		return File_Tree;
});