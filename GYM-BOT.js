document.addEventListener('DOMContentLoaded', function() {
            const chatMessages = document.getElementById('chat-messages');
            const messageInput = document.getElementById('message-input');
            const sendButton = document.getElementById('send-button');
            const typingIndicator = document.getElementById('typing-indicator');
            const quickActionButtons = document.querySelectorAll('.quick-action-btn');
            // Enhanced Exercise Database
            const exerciseDatabase = {
                "full body": {
                    description: "🔥 <strong>Full Body Power Routine</strong> - Hits all major muscle groups efficiently:",
                    exercises: [
                        {name: "Barbell Squats", sets: "4", reps: "10-12", rest: "2-3 min", focus: "Quads, Glutes"},
                        {name: "Bench Press", sets: "4", reps: "10-12", rest: "2-3 min", focus: "Chest, Triceps"},
                        {name: "Bent-over Rows", sets: "3", reps: "8-10", rest: "90 sec", focus: "Back, Biceps"},
                        {name: "Overhead Press", sets: "3", reps: "10-12", rest: "90 sec", focus: "Shoulders"},
                        {name: "Romanian Deadlifts", sets: "3", reps: "8-10", rest: "90 sec", focus: "Hamstrings"},
                        {name: "Plank", sets: "3", reps: "45-60 sec", rest: "60 sec", focus: "Core"}
                    ],
                    tips: "Perform this 2-3x/week. Focus on progressive overload. Perfect form before increasing weight."
                },
                "leg": {
                    description: "🦵 <strong>Leg Destroyer Routine</strong> - Comprehensive lower body development:",
                    exercises: [
                        {name: "Leg-extension", sets: "5", reps: "5", rest: "3 min", focus: "Quads, Glutes"},
                        {name: "Barbell squats", sets: "3", reps: "8-10/leg", rest: "90 sec", focus: "Unilateral Strength"},
                        {name: "Romanian Deadlifts", sets: "4", reps: "8", rest: "2 min", focus: "Hamstrings"},
                        // {name: " cable curls", sets: "3", reps: "12-15", rest: "90 sec", focus: "Quad Hypertrophy"},
                        {name: "Walking Lunges", sets: "3", reps: "20 steps", rest: "60 sec", focus: "Functional Strength"},
                        {name: "Seated Calf Raises", sets: "4", reps: "15-20", rest: "60 sec", focus: "Calves"}
                    ],
                    tips: "Squat depth is crucial - go parallel or lower. Control eccentric movements. Don't skip calves!"
                },
                "arm": {
                    description: "💪 <strong>Arm Specialization Routine</strong> - For sleeve-busting growth:",
                    exercises: [
                        {name: "Close-Grip Bench Press", sets: "4", reps: "8-10", rest: "2 min", focus: "Triceps"},
                        {name: "EZ-Bar Curls", sets: "3", reps: "10-12", rest: "90 sec", focus: "Biceps"},
                        {name: "Skull Crushers", sets: "3", reps: "10-12", rest: "90 sec", focus: "Triceps Long Head"},
                        {name: "Hammer Curls", sets: "3", reps: "12", rest: "60 sec", focus: "Brachi radialis"},
                        {name: "Triceps Rope Pushdown", sets: "3", reps: "12-15", rest: "60 sec", focus: "Triceps"},
                        {name: "Preacher Curls", sets: "3", reps: "12", rest: "60 sec", focus: "Biceps Peak"}
                    ],
                    tips: "Focus on mind-muscle connection. Squeeze at top of curls. Full extension on pushdowns."
                },
                "shoulder": {
                    description: "🏋️ <strong>Shoulder Sculptor Routine</strong> - For 3D delts:",
                    exercises: [
                        {name: "Overhead Press", sets: "4", reps: "6-8", rest: "2-3 min", focus: "Front Delts"},
                        {name: "Lateral Raises", sets: "4", reps: "12-15", rest: "60 sec", focus: "Medial Delts"},
                        {name: "Rear Delt Flyes", sets: "4", reps: "12-15", rest: "60 sec", focus: "Rear Delts"},
                        {name: "Face Pulls", sets: "3", reps: "15", rest: "60 sec", focus: "Rotator Cuff"},
                        {name: "Arnold Press", sets: "3", reps: "10", rest: "90 sec", focus: "All Delts"},
                        {name: "Shrugs", sets: "3", reps: "12-15", rest: "60 sec", focus: "Traps"}
                    ],
                    tips: "Balance all three deltoid heads. Go light on laterals - form over weight. Rotator cuff health is crucial."
                },
                "chest": {
                    description: "🏋️ <strong>Chest Builder Routine</strong> - For thickness and definition:",
                    exercises: [
                        {name: "Flat Barbell Bench", sets: "4", reps: "6-8", rest: "2-3 min", focus: "Overall Mass"},
                        {name: "Incline Dumbbell Press", sets: "3", reps: "8-10", rest: "90 sec", focus: "Upper Chest"},
                        {name: "Dips (Weighted)", sets: "3", reps: "8-10", rest: "90 sec", focus: "Lower Chest"},
                        {name: "Cable Flyes", sets: "3", reps: "12-15", rest: "60 sec", focus: "Inner Chest"},
                        {name: "Push-ups (Plyo)", sets: "3", reps: "AMRAP", rest: "60 sec", focus: "Explosiveness"}
                    ],
                    tips: "Arch slightly, retract scapula. Control eccentric. Include both flat and incline movements."
                },
                "back": {
                    description: " <strong>Back Development Routine</strong> - For width and thickness:",
                    exercises: [
                        {name: "Pull-ups (Weighted)", sets: "4", reps: "6-8", rest: "2-3 min", focus: "Lats"},
                        {name: "Barbell Rows", sets: "4", reps: "8-10", rest: "2 min", focus: "Mid-Back"},
                        {name: "Deadlifts", sets: "3", reps: "5", rest: "3 min", focus: "Posterior Chain"},
                        {name: "Lat Pulldown", sets: "3", reps: "10-12", rest: "90 sec", focus: "Width"},
                        {name: "Face Pulls", sets: "3", reps: "15", rest: "60 sec", focus: "Rear Delts"}
                    ],
                    tips: "Squeeze shoulder blades. Full range of motion. Deadlifts once per week max for recovery."
                },



                "cardio": {
                    description: "  <strong>Cardio Blast Routine</strong> - For fat loss and endurance:",
                    exercises: [
                        {name: "Treadmill Sprints", sets: "3", reps: "30sec", rest: "60 sec", focus: "Explosiveness"},
                        {name: "Jumping jacks", sets: "3", reps: "3 min", rest: "2 min", focus: "Leg Endurance"},
                        {name: "Dancing to music", sets: "3", reps: "3 min", rest: "2 min", focus: "Full Body"},
                        {name: "Jogging in place", sets: "3", reps: "3 min", rest: "2 min", focus: "Calves"},
                        {name: "Burpees", sets: "3", reps: "12", rest: "60 sec", focus: "Full Body Strength"}
                    ],
                    tips: "3-5 times a week. Increase intensity over time. Include variety for optimal results."
                },


                "abs": {
                    description: "  <strong>Core Crusher Routine</strong> - For strength and definition:",
                    exercises: [
                        {name: "Hanging knee Raises", sets: "3", reps: "12-15", rest: "60 sec", focus: "Lower Abs"},
                        {name: " Crunches", sets: "3", reps: "15", rest: "60 sec", focus: "Upper Abs"},
                        {name: "Russian Twists (Weighted)", sets: "3", reps: "20/side", rest: "60 sec", focus: "Obliques"},
                        {name: "Plank", sets: "3", reps: "60+ sec", rest: "60 sec", focus: "Stability"},
                        {name: "Ab Wheel Rollouts", sets: "3", reps: "10-12", rest: "60 sec", focus: "Full Core"}
                    ],
                    tips: "Quality over quantity. Engage core fully. Remember abs are made in the kitchen too!"
                },
                "beginner": {
                    description: "👨‍🦱 <strong>Beginner Foundation Routine</strong> - Learn the fundamentals:",
                    exercises: [
                        {name: "Bodyweight Squats", sets: "3", reps: "12-15", rest: "60 sec", focus: "Form"},
                        {name: "Push-ups", sets: "3", reps: "AMRAP", rest: "60 sec", focus: "Chest"},
                        {name: "Inverted Rows", sets: "3", reps: "8-10", rest: "60 sec", focus: "Back"},
                        {name: "Dumbbell Shoulder Press", sets: "3", reps: "10-12", rest: "60 sec", focus: "Shoulders"},
                        {name: "Plank", sets: "3", reps: "30 sec", rest: "60 sec", focus: "Core"},
                        {name: "Assisted Pull-ups", sets: "3", reps: "5-8", rest: "90 sec", focus: "Back Strength"}
                    ],
                    tips: "3x/week. Focus on form. Increase difficulty gradually. Add cardio 2-3x/week for conditioning."
                },
                "intermediate": {
                    description: "🧑‍💪 <strong>Intermediate Progression Routine</strong> - For building strength and muscle:",
                    exercises: [
                        {name: "Front Squats", sets: "4", reps: "8-10", rest: "2 min", focus: "Quads, Core"},
                        {name: "Pull-Ups", sets: "4", reps: "8-10", rest: "90 sec", focus: "Back, Biceps"},
                        {name: "Incline Dumbbell Press", sets: "4", reps: "8-12", rest: "90 sec", focus: "Chest, Shoulders"},
                        {name: "Romanian Deadlift", sets: "3", reps: "10", rest: "2 min", focus: "Hamstrings, Glutes"},
                        {name: "Seated Row", sets: "3", reps: "12", rest: "90 sec", focus: "Back"},
                        {name: "Hanging Knee Raises", sets: "3", reps: "15", rest: "60 sec", focus: "Abs"}
                    ],
                    tips: "Train 4x/week. Focus on progressive overload. Add weight or reps each week. Prioritize recovery."
                },
                "advanced": {
                    description: "🏆 <strong>Advanced Athlete Routine</strong> - For experienced lifters seeking maximum gains:",
                    exercises: [
                        {name: "Snatch Grip Deadlift", sets: "4", reps: "5", rest: "3 min", focus: "Posterior Chain, Grip"},
                        {name: "Barbell Hip Thrust", sets: "4", reps: "8-10", rest: "2 min", focus: "Glutes, Hamstrings"},
                        {name: "Weighted Pull-Ups", sets: "4", reps: "6-8", rest: "2 min", focus: "Back, Biceps"},
                        {name: "Paused Bench Press", sets: "4", reps: "6", rest: "2-3 min", focus: "Chest, Triceps"},
                        {name: "Front Squat", sets: "4", reps: "6-8", rest: "2-3 min", focus: "Quads, Core"},
                        {name: "Pendlay Row", sets: "4", reps: "8", rest: "90 sec", focus: "Back Thickness"},
                        {name: "Overhead Barbell Press", sets: "4", reps: "6-8", rest: "2 min", focus: "Shoulders"},
                        {name: "Farmer's Walk", sets: "3", reps: "40m", rest: "90 sec", focus: "Grip, Full Body"},
                        // {name: "Dragon Flag", sets: "3", reps: "6-8", rest: "90 sec", focus: "Core Strength"}
                    ],
                    tips: "Warm up thoroughly. Focus on perfect form and controlled tempo. Use spotters for heavy lifts. Prioritize recovery and advanced nutrition."
                },
                "biceps": {
                    description: "🫱 <strong>Biceps Blast Routine</strong> - For bigger, stronger arms:",
                    exercises: [
                        {name: "Barbell Curls", sets: "4", reps: "8-10", rest: "90 sec", focus: "Biceps Brachii"},
                        {name: "Dumbbell Hammer Curls", sets: "3", reps: "10-12", rest: "60 sec", focus: "Brachialis"},
                        {name: "Preacher Curls", sets: "3", reps: "10-12", rest: "60 sec", focus: "Bicep Peak"},
                        {name: "Cable Curls", sets: "3", reps: "12-15", rest: "60 sec", focus: "Constant Tension"},
                        {name: "Incline Dumbbell Curls", sets: "3", reps: "8-10", rest: "90 sec", focus: "Long Head"},
                        {name: "Concentration Curls", sets: "3", reps: "10-12", rest: "60 sec", focus: "Mind-Muscle Connection"}
                    ],
                    tips: "Control eccentric phase. Don't swing weights. Focus on squeeze at top. Include variety for all biceps heads."
                },
                "triceps": {
                    description: "🫲 <strong>Triceps Overload Routine</strong> - Build horseshoe arms:",
                    exercises: [
                        {name: "Close-Grip Bench Press", sets: "4", reps: "6-8", rest: "2 min", focus: "Triceps"},
                        {name: "Overhead Cable Extensions", sets: "3", reps: "10-12", rest: "60 sec", focus: "Long Head"},
                        {name: "Cable Pushdowns", sets: "3", reps: "12-15", rest: "60 sec", focus: "Lateral Head"},
                        {name: "Dips (Weighted)", sets: "3", reps: "8-10", rest: "90 sec", focus: "Triceps Lockout"},
                        {name: "Skull Crushers", sets: "3", reps: "10-12", rest: "60 sec", focus: "Triceps Mass"},
                        {name: "Triceps Kickbacks", sets: "3", reps: "12-15", rest: "60 sec", focus: "Rear Head"}
                    ],
                    tips: "Full lockout on extensions. Control descent. Use a variety of grips for full development."
                },
                "bro-split": {
                    description: "💥 <strong>Bro Split Routine</strong> - Classic muscle group specialization:",
                    exercises: [
                        {name: "Chest Day: Flat Bench Press", sets: "4", reps: "6-8", rest: "90 sec", focus: "Overall Chest"},
                        {name: "Back Day: Pull-Ups", sets: "4", reps: "8-10", rest: "90 sec", focus: "Lats"},
                        {name: "Leg Day: Squats", sets: "5", reps: "5", rest: "3 min", focus: "Quads, Glutes"},
                        {name: "Shoulder Day: Overhead Press", sets: "4", reps: "6-8", rest: "2 min", focus: "Delts"},
                        {name: "Arm Day: Curls + Pushdowns", sets: "3 each", reps: "10-12", rest: "60 sec", focus: "Biceps & Triceps"},
                        {name: "Abs: Hanging Leg Raises", sets: "3", reps: "12-15", rest: "60 sec", focus: "Lower Abs"}
                    ],
                    tips: "Train 5-6 days/week. One major muscle group per day. Prioritize compound lifts. Add isolation for volume."
                }
            };
            // ==================================
            // =================================
            // Form tips with emojis
            const formTips = {
                "squat": "🏋️ <strong>Squat Form Tips</strong>:\n- Feet shoulder-width, toes slightly out\n- Break at hips first, then knees\n- Keep chest up, back tight\n- Descend until thighs parallel or lower\n- Drive through heels to stand\n- Keep knees tracking over toes",
                "deadlift": "🏋️ <strong>Deadlift Form Tips</strong>:\n- Stand with shins close to bar\n- Hinge at hips, flat back\n- Grip just outside legs\n- Drive through heels\n- Keep bar close to body\n- Lock out hips at top\n- Don't shrug shoulders",
                "bench": "🏋️ <strong>Bench Press Tips</strong>:\n- Retract shoulder blades\n- Moderate arch in back\n- Grip slightly wider than shoulders\n- Lower to mid-chest\n- Drive feet into floor\n- Don't bounce off chest\n- Full lockout at top",
                "pullup": "🏋️ <strong>Pull-up Tips</strong>:\n- Start from dead hang\n- Pull with back muscles first\n- Get chin over bar\n- Control descent\n- Avoid kipping (unless crossfit)\n- Full range of motion\n- Engage core",
                "overhead": "🏋️ <strong>Overhead Press Tips</strong>:\n- Bar starts at upper chest\n- Brace core hard\n- Press straight up\n- Slight lean back is okay\n- Don't overextend at top\n- Control descent\n- Keep wrists straight",
                "row": "🏋️ <strong>Row Form Tips</strong>:\n- Hinge at hips, slight knee bend\n- Flat back throughout\n- Pull weight to waist\n- Squeeze shoulder blades\n- Control eccentric\n- Don't use momentum\n- Full stretch at bottom",

                "front squat": "🏋️ <strong>Front Squat Form Tips</strong>:\n- Hold barbell with hands shoulder-width apart\n- Hold barbell close to body\n- Break at hips first, then knees\n- Keep chest up, back tight\n- Descend until thighs parallel or lower\n- Drive through heels to stand",
                "back squat": "🏋️ <strong>Back Squat Form Tips</strong>:\n- Hold barbell with hands shoulder-width apart\n- Keep barbell close to body\n- Break at hips first, then knees\n- Keep chest up, back tight\n- Descend until thighs parallel or lower\n- Drive through heels to stand",
                "leg press": "🏋️ <strong>Leg Press Form Tips</strong>:\n- Hold onto handles\n- Keep feet shoulder-width apart\n- Press weight through heels\n- Keep chest up, back tight\n- Descend until thighs parallel or lower\n- Drive through heels to stand",
                "lunge": "🏋️ <strong>Lunge Form Tips</strong>:\n- Hold onto weights\n- Keep feet hip-width apart\n- Step forward with one foot\n- Keep back straight, core tight\n- Lower until back knee almost touches ground\n- Drive through front leg to stand",
                "romanian deadlift": "🏋️ <strong>Romanian Deadlift Form Tips</strong>:\n- Hold barbell with hands shoulder-width apart\n- Bend at hips, keep back straight\n- Lower barbell to top of shins\n- Keep core tight, chest up\n- Drive through heels to stand",
                "lat pulldown": "🏋️ <strong>Lat Pulldown Form Tips</strong>:\n- Hold bar with hands shoulder-width apart\n- Pull bar towards chest\n- Keep elbows close to body\n- Squeeze shoulder blades\n- Control eccentric",

"barbell curl": "🏋️ <strong>Barbell Curl Form Tips</strong>:\n- Stand with feet shoulder-width apart\n- Grip barbell with hands slightly wider than shoulders\n- Keep elbows close to sides\n- Curl bar up while keeping upper arms stationary\n- Squeeze biceps at top\n- Lower slowly to start position\n- Avoid swinging or using momentum",
"plank": "🏋️ <strong>Plank Form Tips</strong>:\n- Place forearms on the ground, elbows under shoulders\n- Keep body in a straight line from head to heels\n- Engage core and glutes\n- Avoid sagging hips or rounded back\n- Hold position, breathing steadily\n- Aim for longer duration over time",
"push-up": "🏋️ <strong>Push-up Form Tips</strong>:\n- Place hands slightly wider than shoulders\n- Keep body in a straight line\n- Lower chest to floor, elbows at 45° angle\n- Push back up, fully extending arms\n- Engage core throughout\n- Avoid flaring elbows or sagging hips",
"barbell squat": "🏋️ <strong>Barbell Squat Form Tips</strong>:\n- Stand with feet shoulder-width apart\n- Hold barbell with hands shoulder-width apart\n- Keep back straight, chest up\n- Break at hips first, then knees\n- Lower until thighs are parallel or lower\n- Drive through heels to stand",
"bench press": "🏋️ <strong>Bench Press Form Tips</strong>:\n- Lie on a flat bench with feet planted\n- Grip barbell with hands slightly wider than shoulders\n- Lower bar to mid-chest\n- Pause briefly, then press upwards\n- Fully extend arms at the top\n- Avoid flaring elbows or arching back",
"overhead press": "🏋️ <strong>Overhead Press Form Tips</strong>:\n- Stand with feet shoulder-width apart\n- Hold barbell with hands slightly wider than shoulders\n- Press barbell upwards, extending arms fully\n- Lower barbell to starting position, avoiding momentum\n- Keep core engaged and back straight throughout",


"assisted pull-up": "🏋️ <strong>Assisted Pull-Up Form Tips</strong>:\n- Use a resistance band or machine\n- Start from dead hang\n- Pull with back muscles first\n- Get chin over the bar\n- Control descent\n- Avoid kipping\n- Engage core throughout",

"dumbbell shoulder press": "🏋️ <strong>Dumbbell Shoulder Press Form Tips</strong>:\n- Sit or stand with feet shoulder-width apart\n- Hold dumbbells at shoulder height\n- Press upwards, extending arms fully\n- Lower dumbbells slowly to start position\n- Keep core engaged\n- Avoid arching back",
"incline dumbbell press": " <strong>Incline Dumbbell Press Form Tips</strong>:\n- Adjust incline to 45°\n- Hold dumbbells with hands shoulder-width apart\n- Press upwards, extending arms fully\n- Lower dumbbells to starting position\n- Keep core engaged and back straight throughout",

"dips": " <strong>Dips Form Tips</strong>:\n- Sit on edge of bench with hands gripping the edge\n- Lower body by bending elbows\n- Keep elbows close to body\n- Lower until arms are bent at 90°\n- Push back up to start position\n- Keep core engaged and avoid swinging or using momentum",
"inverted row": "🏋️ <strong>Inverted Row Form Tips</strong>:\n- Use a barbell or TRX\n- Hang below with straight body\n- Pull chest to bar\n- Squeeze shoulder blades at top\n- Lower slowly\n- Keep body straight\n- Engage core",

"bodyweight squat": "🏋️ <strong>Bodyweight Squat Form Tips</strong>:\n- Stand with feet shoulder-width apart\n- Keep chest up, back straight\n- Break at hips first, then knees\n- Lower until thighs are parallel or lower\n- Drive through heels to stand\n- Keep knees tracking over toes",

"concentration curls": " <strong>Concentration Curl Form Tips</strong>:\n- Sit on a bench or chair\n- Hold dumbbell with arm resting on leg\n- Curl dumbbell up while keeping upper arm stationary\n- Focus on biceps contraction\n- Lower slowly to start position\n- Avoid swinging or using momentum",
"incline dumbbell curls": " <strong>Incline Dumbbell Curl Form Tips</strong>:\n- Adjust incline to 45°\n- Hold dumbbells with hands shoulder-width apart\n- Curl dumbbells up while keeping upper arms stationary\n- Focus on biceps contraction\n- Lower slowly to start position\n- Avoid swinging or using momentum",
"cable curls": " <strong>Cable Curl Form Tips</strong>:\n- Adjust cable height to chest level\n- Hold handle with both hands\n- Stand with feet shoulder-width apart\n- Curl handle up while keeping upper arms stationary\n- Focus on biceps contraction\n- Lower slowly to start position\n- Avoid swinging or using momentum",
"hanging knee raises": "🏋️ <strong>Hanging Knee Raise Form Tips</strong>:\n- Hang from a pull-up bar with hands shoulder-width apart\n- Lift knees up to chest level\n- Squeeze abs at top\n- Lower slowly\n- Keep core engaged\n- Avoid swinging or using momentum\n- Focus on slow and controlled movement",
"cable flyes": " <strong>Cable Flyes Form Tips</strong>:\n- Adjust cable height to chest level\n- Hold handle with both hands\n- Stand with feet shoulder-width apart\n- Press handle out, keeping arms straight\n- Lower slowly\n- Keep core engaged and back straight throughout",



    "close grip bench press": "🏋️ <strong>Close-Grip Bench Press Tips</strong>:\n- Grip barbell just inside shoulder width\n- Elbows tucked close to body\n- Lower bar to lower chest\n- Press upwards, fully extending arms\n- Engage triceps throughout\n- Avoid flaring elbows or arching back",
    "ez bar curl": "🏋️ <strong>EZ Bar Curl Tips</strong>:\n- Stand with feet shoulder-width apart\n- Grip EZ bar with angled grip\n- Keep elbows close to sides\n- Curl bar up while keeping upper arms stationary\n- Squeeze biceps at top\n- Lower slowly to start position\n- Avoid swinging or using momentum",
    "skull crushers": "🏋️ <strong>Skull Crushers Tips</strong>:\n- Lie on bench, hold barbell with straight arms\n- Lower bar to forehead by bending elbows\n- Keep upper arms stationary\n- Extend arms back to start position\n- Engage triceps throughout\n- Avoid flaring elbows",
    "hammer curls": "🏋️ <strong>Hammer Curl Tips</strong>:\n- Stand with feet shoulder-width apart\n- Hold dumbbells with neutral grip (palms facing)\n- Keep elbows close to sides\n- Curl dumbbells up while keeping upper arms stationary\n- Squeeze biceps at top\n- Lower slowly to start position\n- Avoid swinging or using momentum",
    "triceps-rope pushdown": "🏋️ <strong>Triceps Rope Pushdown Tips</strong>:\n- Stand with feet shoulder-width apart\n- Grip rope with palms facing\n- Keep elbows close to sides\n- Push rope down until arms are fully extended\n- Squeeze triceps at bottom\n- Return to start position slowly\n- Avoid using momentum",
    "preacher curl": "🏋️ <strong>Preacher Curl Tips</strong>:\n- Sit on preacher bench, arms over pad\n- Hold barbell or dumbbells with underhand grip\n- Curl weight up while keeping upper arms stationary\n- Squeeze biceps at top\n- Lower slowly to start position\n- Avoid swinging or using momentum",



    "cable pushdown": "🏋️ <strong>Cable Pushdown Tips</strong>:\n- Stand facing cable machine with feet shoulder-width apart\n- Hold handle with palms facing down\n- Keep elbows close to body\n- Push handle down until arms are fully extended\n- Squeeze triceps at bottom\n- Return to start position slowly\n- Avoid using momentum",
    "overhead cable extensions": "🏋️ <strong>Overhead Cable Extensions Tips</strong>:\n- Stand facing cable machine with feet shoulder-width apart\n- Hold handle with arms extended overhead\n- Keep core engaged\n- Lower handle behind head, keeping upper arms stationary\n- Raise handle back to start position\n- Avoid arching back or using momentum",



    "pull up": "🏋️ <strong>Pull-Up Form Tips</strong>:\n- Hang from a pull-up bar with hands shoulder-width apart\n- Engage lats and pull body up\n- Focus on squeezing lats, not just arms\n- Lower slowly to start position\n- Avoid swinging or using momentum",
    "face pull": " <strong>Face Pull Form Tips</strong>:\n- Hold a resistance band with both hands\n- Keep elbows close to body\n- Pull band apart while keeping upper arms stationary\n- Squeeze rear deltoids at top\n- Lower slowly to start position\n- Avoid swinging or using momentum\n- Focus on slow and controlled movement",



    "seated calf raises": " <strong>Seated Calf Raise Form Tips</strong>:\n- Sit on a calf raise machine with legs extended\n- Lift the weight up with calf muscles\n- Lower slowly to start position\n- Focus on slow and controlled movement\n- Avoid bouncing or using momentum",
    
    "crunches": " <strong>Crunch Form Tips</strong>:\n- Lie on a flat bench with knees bent\n- Hands behind head, but avoid pulling head\n- Curl up, lifting shoulders off bench\n- Focus on slow and controlled movement\n- Lower slowly to start position\n- Avoid using momentum",
    "russian twist ": " <strong>Russian Twist  Form Tips</strong>:\n- Sit on a bench or floor with feet flat\n- Hold a weight with both hands\n- Twist torso to left and right\n- Touch weight to ground beside you\n- Focus on slow and controlled movement\n- Avoid using momentum",
    "ab wheel rollouts": " <strong>Ab Wheel Rollout Form Tips</strong>:\n- Start on hands and knees\n- Hold an ab wheel with both hands\n- Roll out, keeping back straight and core engaged\n- Focus on slow and controlled movement\n- Roll back to start position\n- Avoid using momentum\n- Keep abs tight throughout\n- Focus on full range of motion",






    "burpee": "🏋️ <strong>Burpee Form Tips</strong>:\n- Stand with feet shoulder-width apart\n- Lower into squat, place hands on ground\n- Kick feet back into plank\n- Perform a push-up\n- Jump feet forward to hands\n- Explode into a jump, reaching arms overhead\n- Land softly and repeat",
    "jogging in place": "🏃 <strong>Jogging in Place Tips</strong>:\n- Stand tall, engage core\n- Lightly jog, alternating legs\n- Pump arms naturally\n- Keep a steady pace\n- Focus on breathing rhythm\n- Land softly on balls of feet",
    "dancing to music": "💃 <strong>Dancing Tips</strong>:\n- Choose music that energizes you\n- Keep knees slightly bent\n- Move freely, let rhythm guide you\n- Engage whole body\n- Stay relaxed, enjoy the movement\n- Hydrate and take breaks as needed",
    "jumping jacks": "🕺 <strong>Jumping Jacks Tips</strong>:\n- Stand with feet together, arms at sides\n- Jump, spreading legs and raising arms overhead\n- Land softly, returning to start position\n- Maintain a steady rhythm\n- Engage core throughout\n- Keep movements controlled",
    "treadmill sprints": "🏃‍♂️ <strong>Treadmill Sprint Tips</strong>:\n- Start at a comfortable pace\n- Gradually increase speed for intervals\n- Keep posture upright, lean slightly forward\n- Drive with arms, maintain quick turnover\n- Focus on short, powerful strides\n- Cool down gradually after sprints"



   };



            // Common greetings and responses
            const greetings = {
                "hello": "💪 Hello! Ready to crush your workout today? What muscle group are we focusing on?",
                "hi": "🏋️ Hi there! Looking for workout advice or form tips? I can help with routines for any muscle group!",
                "hey": "🔥 Hey fitness warrior! Need a new routine or form check? Ask away!",
                "how are you": "🏅 I'm always energized to talk about fitness! What's your training focus today?",
                "what's up": "👋 Just waiting to help you smash your fitness goals! What do you need - exercises, routines, or form tips?",
                "good morning": "🌞 Good morning! Perfect time for a workout. What's on your training plan today?",
                "good afternoon": "🌤 Good afternoon! Have you gotten your workout in yet? If not, I can suggest something efficient!",
                "good evening": "🌙 Good evening! Great time for an evening session or to plan tomorrow's workout. What's your goal?",
                "good night": "🌚 Good night! Great time for a night session or to plan tomorrow's workout. What's your goal?",
                "morning": "🌞 Morning! Perfect time for a workout. What's on your training plan today?",
                "afternoon": "🌤 Afternoon! Have you gotten your workout in yet? If not, I can suggest something efficient!",
                "evening": "🌙 Evening! Great time for an evening session or to plan tomorrow's workout. What's your goal?",
                "night": "🌚 Night! Great time for a night session or to plan tomorrow's workout. What's your goal?",
                "gm": "🌞 Good morning! Perfect time for a workout. What's on your training plan today?",
                "ga": "🌤 Good afternoon! Have you gotten your workout in yet? If not, I can suggest something efficient!",
                "ge": "🌙 Good evening! Great time for an evening session or to plan tomorrow's workout. What's your goal?",
                "gn": "🌚 Good night! Great time for a night session or to plan tomorrow's workout. What's your goal?",
                "yo": "🔥 Hey there! Ready to get fit or just need some workout advice? I'm here to help!",
                "hi buddy": "👋 Hey buddy! How's your fitness journey going? Need some workout tips or a routine?",
                "sup": "🤔 Sup! Just chillin' and waiting to help with your fitness goals. Need a workout routine or form check?",

                "hiiie": "👋 Hey! Ready to get fit or just need some workout advice? I'm here to help!",
                "hey bb": "💕 Hey bb! How's your fitness journey going? Need some workout tips or a routine?",
                "heyyyy": "🔥 Heyyyy! Just chillin' and waiting to help with your fitness goals. Need a workout routine or form check?",
                "hiiii": "😊 Hiiii! Ready to get fit or just need some workout advice? I'm here to help!",
                "heyyy": "👋 Heyyy! Just chillin' and waiting to help with your fitness goals. Need a workout routine or form check?",



            };
            // Function to add a message to the chat
            function addMessage(text, isUser) {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
                // Check if text contains exercise data
                if (typeof text === 'object' && text.description) {
                    let html = `<div>${text.description}</div>`;
                    text.exercises.forEach(ex => {
                        html += `
                        <div class="exercise-card">
                            <div class="exercise-title">${ex.name}</div>
                            <div class="exercise-details">
                                <span class="exercise-detail">${ex.sets} sets</span>
                                <span class="exercise-detail">${ex.reps} reps</span>
                                <span class="exercise-detail">${ex.rest} rest</span>
                            </div>
                            <div style="margin-top:8px;font-size:13px;color:#6c757d;">Focus: ${ex.focus}</div>
                        </div>`;
                    });
                    html += `<div style="margin-top:15px;font-size:14px;">${text.tips}</div>`;
                    messageDiv.innerHTML = html;
                } 
                // Check if text contains form tips
                else if (text.includes("<strong>Form Tips</strong>")) {
                    messageDiv.innerHTML = text.replace(/\n/g, "<br>");
                }
                else {
                    messageDiv.innerHTML = text.replace(/\n/g, "<br>");
                }
                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            // Function to show typing indicator
            function showTypingIndicator() {
                typingIndicator.style.display = 'flex';
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            // Function to hide typing indicator
            function hideTypingIndicator() {
                typingIndicator.style.display = 'none';
            }
            // Function to generate a bot response
            function generateResponse(userMessage) {
                // Convert to lowercase and remove extra spaces
                const cleanMessage = userMessage.toLowerCase().trim();
                // Check for greetings first
                for (const [greeting, response] of Object.entries(greetings)) {
                    if (cleanMessage.includes(greeting)) {
                        return response;
                    }
                }
                // Check for muscle group queries
                for (const [muscleGroup, data] of Object.entries(exerciseDatabase)) {
                    if (cleanMessage.includes(muscleGroup)) {
                        return data;
                    }
                }
                // Check for form tips
                for (const [exercise, tip] of Object.entries(formTips)) {
                    if (cleanMessage.includes(exercise)) {
                        return tip;
                    }
                }
                // Specific common questions
                if (cleanMessage.includes('how often')) {
                    return "📅 <strong>Training Frequency</strong>:\n- Beginners: 3 full-body workouts/week\n- Intermediate: 4-5 days (split routines)\n- Advanced: 5-6 days\n- Always include 1-2 rest days/week\n- Muscle groups need 48-72h recovery";
                }
                if (cleanMessage.includes('rest time') || cleanMessage.includes('how long to rest')) {
                    return "⏱ <strong>Rest Periods</strong>:\n- Strength (heavy weights): 2-5 min\n- Hypertrophy (moderate): 60-90 sec\n- Endurance (light): 30-60 sec\n- Compound lifts need more rest\n- Isolation exercises need less";
                }
                if (cleanMessage.includes('how many sets')) {
                    return "📊 <strong>Volume Guide</strong> (per muscle group/week):\n- Beginners: 10-15 sets\n- Intermediate: 15-20 sets\n- Advanced: 20-25 sets\n- Spread over 2-3 sessions\n- More isn't always better!";
                }
                if (cleanMessage.includes('warm up')) {
                    return "🔥 <strong>Warmup Protocol</strong>:\n1. 5-10 min light cardio\n2. Dynamic stretches (leg swings, arm circles)\n3. 2-3 warmup sets per exercise\n4. Start with 50% working weight\n5. Focus on movement patterns";
                }
                if (cleanMessage.includes('your name') || cleanMessage.includes('who are you')) {
                    return "🤖 I'm GymGenius AI, your personal training assistant! I can create workout plans, explain exercises, and give form tips for any muscle group.";
                }
                if (cleanMessage.includes('thank')) {
                    return "🙏 You're welcome! Let me know if you need any other fitness advice. Remember - consistency is key!";
                }
                if (cleanMessage.includes('help') || cleanMessage.includes('what can you do')) {
                    return "💡 I can:\n- Create workout routines\n- Explain exercises for any muscle group\n- Provide proper form tips\n- Answer fitness questions\nTry: 'leg exercises', 'how to deadlift', or 'beginner routine'";
                }
                // Default response
                return "🤔 I'm not sure I understand. Try asking about:\n- Specific muscle groups (chest, legs, etc.)\n- Exercise form (how to squat)\n- Workout routines\n- Training frequency/sets\nExample: 'What are good shoulder exercises?'";
            }
            // Function to handle sending a message
            function sendMessage() {
                const message = messageInput.value.trim();
                if (message === '') return;
                // Add user message
                addMessage(message, true);
                messageInput.value = '';
                // Show typing indicator
                showTypingIndicator();
                // Simulate bot thinking
                setTimeout(() => {
                    hideTypingIndicator();
                    const response = generateResponse(message);
                    addMessage(response, false);
                }, 800 + Math.random() * 1000);
            }
            // Event listeners
            sendButton.addEventListener('click', () => {
    sendButton.style.transform = 'scale(0.85)';
    setTimeout(() => sendButton.style.transform = '', 150);
    sendMessage();
});
            messageInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendButton.style.transform = 'scale(0.85)';
                    setTimeout(() => sendButton.style.transform = '', 150);
                    sendMessage();
                }
            });
            // Quick action buttons
            quickActionButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const query = this.getAttribute('data-query');
                    messageInput.value = query;
                    sendMessage();
                });
            });
            // Initial greeting
            setTimeout(() => {
                // addMessage("💡 <strong>Pro Tip</strong>: Click the buttons above for instant workout ideas, or ask me anything about exercise form, routines, or fitness science!", false);
            }, 1500);
        });



const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
// Theme toggle logic
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')) {
        themeIcon.textContent = '🔆';
    } else {
        themeIcon.textContent = '🔅';
    }
    // Optional: Animate particles color for dark mode
    if(window.pJSDom && window.pJSDom[0]) {
        window.pJSDom[0].pJS.particles.color.value = document.body.classList.contains('dark') ? "#4cc9f0" : "#4895ef";
        window.pJSDom[0].pJS.particles.line_linked.color = document.body.classList.contains('dark') ? "#232946" : "#4361ee";
        window.pJSDom[0].pJS.fn.particlesRefresh();
    }
});
