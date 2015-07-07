Template.user.helpers
(
	{
		nom : function() 
		{
			var nom = Meteor.users.findOne({ _id : this._id}).profile.nom;
			return nom;
		},
		
		mail : function() 
		{
			return Meteor.users.findOne({ _id : this._id}).emails[0].address;
		},
		
		username : function() 
		{
			return Meteor.users.findOne({ _id : this._id}).profile.username;
		},
		
		prenom : function()
		{
			return Meteor.users.findOne({ _id : this._id }).profile.prenom;
		},
		
		blablaAccount : function() {
			if (typeof Meteor.users.findOne({ _id : this._id }).profile.blablaId != 'undefined') {
				return true;
			}
			else{
				return false;
			}
		},
		
		blablaId : function() {
			return Meteor.users.findOne({ _id : this._id }).profile.blablaId;
		},
		
		blablaInfos : function() {
			 Meteor.call("getBlablaInfos", function(error, result){
				console.log(result.data.results.collection2[0].note);
				var test = {"note" : result.data.results.collection2[0].note, "nbCom" : result.data.results.collection2[0].nombre_avis};
				Session.set('q', test);
			});
			return Session.get('q');
		},
		
		ebayAccount : function() {
			if (typeof Meteor.users.findOne({ _id : this._id }).profile.ebayId != 'undefined') {
				return true;
			}
			else{
				return false;
			}
		},
		
		ebayId : function() {
			return Meteor.users.findOne({ _id : this._id }).profile.ebayId;
		},
		
		bnbAccount : function() {
			if (typeof Meteor.users.findOne({ _id : this._id }).profile.bnbId != 'undefined') {
				return true;
			}
			else{
				return false;
			}
		},
		
		bnbId : function() {
			return Meteor.users.findOne({ _id : this._id }).profile.bnbId;
		}
	}
);

Template.user.events({
	
	'click #blabla-add' : function (event, template) {
		
		$("#blabla-add").toggleClass('visible hidden');
    $("#blabla-id").toggleClass('visible hidden');
    $("#blabla-save").toggleClass('visible hidden');
	},
	
	'click #blabla-save' : function(event, template) {
		var blabla_id = template.find("#blabla-id").value;
		Meteor.users.update( { _id: this._id }, {$set: {"profile.blablaId" : blabla_id} } );
	},
	
	'click #blabla-delete' : function(event, template) {
		Meteor.users.update( { _id: this._id }, {$unset: {"profile.blablaId" : ""} } );
	},
	
	'click #ebay-add' : function (event, template) {
		
		$("#ebay-add").toggleClass('visible hidden');
    $("#ebay-id").toggleClass('visible hidden');
    $("#ebay-save").toggleClass('visible hidden');
	},
	
	'click #ebay-save' : function(event, template) {
		var ebay_id = template.find("#ebay-id").value;
		Meteor.users.update( { _id: this._id }, {$set: {"profile.ebayId" : ebay_id} } ); 
	},
	
	'click #ebay-delete' : function(event, template) {
		Meteor.users.update( { _id: this._id }, {$unset: {"profile.ebayId" : ""} } );
	},
	
	'click #bnb-add' : function (event, template) {
		
		$("#bnb-add").toggleClass('visible hidden');
    $("#bnb-id").toggleClass('visible hidden');
    $("#bnb-save").toggleClass('visible hidden');
	},
	
	'click #bnb-save' : function(event, template) {
		var bnb_id = template.find("#bnb-id").value;
		Meteor.users.update( { _id: this._id }, {$set: {"profile.bnbId" : bnb_id} } );
	},
	
	'click #bnb-delete' : function(event, template) {
		Meteor.users.update( { _id: this._id }, {$unset: {"profile.bnbId" : ""} } );
	}
});