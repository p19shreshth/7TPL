from flask import Flask
from .config import Config
from .routes import main as main_routes

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Register blueprints
    app.register_blueprint(main_routes)

    return app