// app.js

class StateManager {
    constructor() {
        this.state = {
            currentView: 'dashboard',
            points: 0,
            badges: [],
            xp: 0,
            progress: {},
            activityHistory: []
        };
    }

    switchView(view) {
        const validViews = ['dashboard', 'parcours', 'editeur'];
        if (validViews.includes(view)) {
            this.state.currentView = view;
            this.logActivity(`Switched to ${view}`);
        } else {
            console.warn('Invalid view:', view);
        }
    }

    updateProgress(activity, progress) {
        this.state.progress[activity] = progress;
        this.logActivity(`Updated progress for ${activity}: ${progress}`);
    }

    addPoints(points) {
        this.state.points += points;
        this.logActivity(`Added ${points} points`);
    }

    addXP(xp) {
        this.state.xp += xp;
        this.logActivity(`Gained ${xp} XP`);
    }

    awardBadge(badge) {
        if (!this.state.badges.includes(badge)) {
            this.state.badges.push(badge);
            this.logActivity(`Awarded badge: ${badge}`);
        }
    }

    logActivity(message) {
        const timestamp = new Date().toISOString();
        this.state.activityHistory.push({ message, timestamp });
    }

    getActivityHistory() {
        return this.state.activityHistory;
    }
}

// Example usage
const app = new StateManager();

// Switch views to demonstrate functionality
app.switchView('parcours');
app.addPoints(10);
app.addXP(50);
app.updateProgress('level1', 'completed');
app.awardBadge('Novice');
console.log(app.getActivityHistory());