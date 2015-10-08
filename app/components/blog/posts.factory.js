function PostsService($filter){

    var PostsService = {};
    var _posts = {
        'posts':[
            {
                'id': 1,
                'title': 'Into The Code',
                'category': 'Web Development',
                'tags':[ "Developer's Life", "Bootcamp"],
                'image': 'intocode.jpg',
                'created_at': '2015-03-07T18:44:31+00:00',
                'body': ">##You don't know where you're going if you don't know where you've been.\n\nSo a little about me before I begin. After completing my degree I came back home and started working in a school. This seemed great at the time, to be fresh out of university, working in a school when I was looking at becoming a music teacher… perfect. Fast forward five years it was safe to say my attitude had changed and I had grown tired of being at the school. The longer I was there the more I could see that I didn’t want to become a teacher and there was no progression for me doing the job I had.\n###Time for something new \nAfter an accidental job search (I was actually looking for a job description for the school as they didn’t have one for me on record) I came across a job as an event technician. When offered the job, I gave it very little consideration and jumped at it. Before I knew it I was moving from Kent to Uxbridge.\nNow, the phrase “when something seems too good to be true…” springs to mind and it wasn’t long till I realised that possibly this job wasn’t as great as I first thought. Working non stop from Friday morning till the Monday after most weekend was not only exhausting to the point it made me unwell it was also pretty dangerous to be driving up and own the country, in overloaded vans when you haven’t slept for several days.\n###Time for something new…. Take two\n\nFour months into the job, it came to my attention that a much larger company was looking for staff to help them out over the summer season. Reasonable hours in a more established company, surely that would be better than what I was doing? And for a while it was, the work was pretty straightforward, there was more staff and I didn’t end up working every hour imaginable. The problem was it wasn’t enough. I have always been a big thinker and the biggest problem I found was that the job didn’t require me to think that much. Driving around all day in a van by yourself gives you far too much time to think and for some this is great, but for me, I found this a bad thing. I needed to be doing something that challenged me, something that was going to make me use all of my brain.\n###Three’s a charm?\n\nI had touched on coding before, having built a static website for the silent disco company I owned and had found it very interesting. I learnt basic HTML5 and CSS3 through online videos and tutorials, after initially trying to build a site using WYSIWYG style software, finding it didn't give me enough control over what I was building. Until then, I hadn't considered pursuing this as a job. I hadn't the knowledge or experience to start applying to jobs as a web developer, but I had enjoyed learning the basics and had found the bit of code I had written to be really challenging and at the same time, really fun to do. I started looking into my options, I was too old to do an apprenticeship and I had already done a degree and wasn't in the position to stop working for three years and do another one. There are hundreds of sites out there offering you to learn code, codeacademy, codeschool and very similarly named sites, but I didn't see an employer taking on someone whole had just done all of these tutorials over people who had done a degree in the subject. Continuing the Google around the topic I stumbled upon an article from the [Guardian](http://www.theguardian.com/technology/2013/oct/14/learn-how-to-code). Having looked through each of the places it suggested, there were two places offering a similar style course that seemed perfect for me. A short (12 weeks) intensive course that would give me enough skills to look for a job as a junior developer.\nSo that was it, my decision made, I was going to take a short intensive course and become a web developer. I finished working for the company I was with, moved back home to Kent and started the Web Development Immersive course with General Assembly. 12 weeks later and I'm on the other side feeling excited about starting my new career path. I have by no means learnt everything, but the course have given me a great starting point, a thirst for learning and building my skills and looking forward to continuing on my journey as a web developer."
            }
        ]
    };
    var _post = {};

    PostsService.index = function(){
        return _posts.posts
    };

    PostsService.show = function(id){
        _post = $filter('filter')(_posts.posts, {id:id})[0];
        return _post
    };

    return PostsService;
}
angular
    .module('public.posts')
    .factory('PostsService', PostsService);