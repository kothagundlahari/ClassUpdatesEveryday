var React =  require('react');
var Router = require('react-router');

var Profile = create.class({
    getInitialState : function () {

        notes : [];
        bio :{};
        repo : []


    },

    render(){
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={this.props.params.username} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos username={this.props.params.username} repos={this.state.repos}/>
                </div>
                <div className="col-md-4">
                    <Notes
                        username={this.props.params.username}
                        notes={this.state.notes}
                        addNote={(newNote) => this.handleAddNote(newNote)} />
                </div>
            </div>
        )
    }
})

module.exports(Profiles)