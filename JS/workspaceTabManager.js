/**
 * The controller class for the tab bar.
 */
var workspaceTabManager = Class.extend({
	
	/**
	 * Contains references to all tabs.
	 */
	tabs : [],
	
	/**
	 * Contains a reference to the active tab.
	 */
	activeTab : null,
	
	/**
	 * Holds a reference to this object.
	 */
	_this : null,
	
	/**
	 * Contains a reference to the workspace.
	 */
	workspace : null,
	
	/**
	 * Contains a reference to the workspace's templateManager.
	 */
	templateManager : null,
	
	/**
	 * Contains the html id of the tab container (hardcoded at the moment, should be replaced by more dynamic code later)
	 */
	tabContainerId : "tabBar",
	
	/**
	 * Contains the id of the tab template.
	 */
	tabTemplateId : "_tab",
	
	/**
	 * Creates a new instance of the tab bar controller.
	 */
	init: function (workspace) {
		throwNullOrUndefined(workspace, "The workpsapce parameter is null or undefined!");
		
		this.workspace = workspace;

		throwNullOrUndefined(this.workspace.templateManager, "The workspace's templateManager is null or undefined!");
		
		this.templateManager = workspace.templateManager;
	},
	
	/**
	 * Opens a new tab and sets it as the active tab.
	 */
	newTab : function() {
		var tabId = this.workspace.getId();
		var newTab = new workspaceTab(tabId);
		
		var tabHtml = this.templateManager.render(this.tabTemplateId, newTab);
		jQuery("#" + this.tabContainerId).append(tabHtml);
		
		this.tabs.push(newTab);
		this.switchTab(newTab);		
	},
	
	/**
	 * Switches to another tab.
	 * @param toTab The tab.
	 */
	switchTab : function(toTab) {

		throwNullOrUndefined(toTab, "The workspaceTabBar.switchTab(toTab) method expects a valid workspaceTab-instance! Undefined or null was supplied.");
		
		this.activeTab = toTab;
	},
	
	/**
	 * Closes the given tab.
	 * @param tab The tab to close.
	 */
	closeTab : function(tab) {
		
	}
});