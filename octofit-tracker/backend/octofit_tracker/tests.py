from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import Team, Activity, Leaderboard, Workout

User = get_user_model()

class ModelTests(TestCase):
    def setUp(self):
        self.team = Team.objects.create(name='Marvel')
        self.user = User.objects.create_user(username='ironman', email='ironman@marvel.com', password='test')
        self.activity = Activity.objects.create(name='Correr', user='ironman', team='Marvel')
        self.leaderboard = Leaderboard.objects.create(user='ironman', team='Marvel', score=100)
        self.workout = Workout.objects.create(name='Pushups', description='Flexiones', user='ironman')

    def test_team_str(self):
        self.assertEqual(str(self.team), 'Marvel')

    def test_activity_str(self):
        self.assertEqual(str(self.activity), 'Correr - ironman')

    def test_leaderboard_str(self):
        self.assertEqual(str(self.leaderboard), 'ironman - 100')

    def test_workout_str(self):
        self.assertEqual(str(self.workout), 'Pushups - ironman')
