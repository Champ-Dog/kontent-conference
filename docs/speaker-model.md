# Content Modeling

## Speaker Model

*How might we model speakers? Consider...*
*How is a specific speaker related to an agenda?*

A specific speaker will appear in particular session/s which will appear in an agenda. They will also be related to a specific region/venue - this isn't specified in the brief but for ease of implementation I am introducing the assumption that no speaker will appear in both regions. 

*How does a conference’s location impact a speaker?*

As stated above, for this project I am assuming that a speaker will appear in one location only. In a real-world scenario, it is definitely possible that a speaker may appear at both locations (the brief specifies different dates for the two locations, and of course there are many technologies to allow for remote presentations); but implementing this won't add significant value for a learning project.

*What happens if a speaker is unavailable? The show must go on…*

Within the scope of this project, this means that it must be possible to easily manage speaker information. To properly allow for this, the project should allow for all CRUD operations without front-end intervention. 

The reasoning for this is that a speaker becoming unavailable means that a new speaker may need to be introduced (*create*), as well as indicating the unavailability of the original speaker. This could take the form of either removing the speaker entirely (*delete*) or, in the case of partial availability, changing only some sessions. This latter scenario may require *update* operations, as may any other changes to a speakers information. And of course, existing speaker information should be visible to content editors to allow for updates, deletions, and other operations.

This core functionality already exists in Kontent.ai; to properly address this point, permissions should be correctly configured for the project.

Again, in a real-world scenario, this might lead to a teleconference situation where speaker unavailability is resolved by users remotely attending the same session in the other venue. As before, however, this doesn't seem like a value-add for the purposes of this project.